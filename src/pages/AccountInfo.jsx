import React, { useContext, useState } from "react";
import "./PageStyles/AccountInfo.css";
import { AuthProvider } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, editAddressAction, removeAddress } from "../features/AddressSlice";

function AccountInfo() {
  const [showAddress, setShowAddress] = useState(false);
  const { user, setUser } = useContext(AuthProvider);
  const addresses = useSelector((state) => state.addresses);

  const [editAddress, setEditAddress] = useState(false);

  const dispatch = useDispatch();

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    house: "",
    city: "",
    stateName: "",
    postalCode: "",
    mobile: "",
  });

  const [editedAddress, setEditedAddress] = useState(null);

  function addressFormHandler(e) {
    e.preventDefault();
    setIsFormOpen(false);
    dispatch(addAddress({ id: Date.now(), ...formData }));
    setFormData({
      name: "",
      house: "",
      city: "",
      stateName: "",
      postalCode: "",
      mobile: "",
    });
  }
  function handleRemoveAddress(id) {
    dispatch(removeAddress(id));
  }

  function handleEditAddress(e) {
    e.preventDefault();
    dispatch(editAddressAction(editedAddress))
    setEditAddress(null);
  }


  return (
    <div className="account">
      <h1 className="account-title">Account</h1>
      <div className="accountinfo-container">
        <div className="account-buttons">
          <button
            className={`${!showAddress ? "active-btn" : ""}`}
            onClick={() => setShowAddress(false)}
          >
            Profile
          </button>
          <button
            className={`${showAddress ? "active-btn" : ""}`}
            onClick={() => setShowAddress(true)}
          >
            Address
          </button>
        </div>
        <div className="details-profile">
          {!showAddress ? (
            <div className="profile-name">
              <h2>Profile Details</h2>
              <div className="user-details">
                <div>
                  <p>Full Name</p>
                  <p>{user.displayName}</p>
                </div>
                <div>
                  <p>Email</p>
                  <p>{user.email}</p>
                </div>
              </div>
              <h2>Account Settings</h2>
              <div className="logout-action">
                <button onClick={() => setUser(null)}>Log Out</button>
              </div>
            </div>
          ) : (
            <div className="address-list">
              <h2>My Addresses</h2>
              <div className="address-list-container">
                {addresses.length >= 1 &&
                  addresses.map((address) => (
                    <div key={address.id} className="each-address">
                      <h3>{address.name}</h3>
                      <p>{`${address.house}, ${address.city}, ${address.stateName} - ${address.postalCode} `}</p>
                      <p>Phone Number: {" " + address.mobile}</p>
                      <div className="each-address-action">
                        <button
                          onClick={() => {
                            setEditAddress(true);
                            setEditedAddress({ ...address });
                          }}
                        >
                          Edit
                        </button>
                        <button onClick={() => handleRemoveAddress(address.id)}>
                          Remove
                        </button>
                      </div>
                      {editAddress && (
                        <div className={`modal ${editAddress ? "open" : ""} `}>
                          <div className="addressForm-container">
                            <form
                              onSubmit={handleEditAddress}
                              className="form-address"
                            >
                              <h2>Add New Address</h2>
                              <input
                                type="text"
                                value={editedAddress.name}
                                placeholder="Enter Name"
                                onChange={(e) =>
                                  setEditedAddress((prevState) => ({
                                    ...prevState,
                                    name: e.target.value,
                                  }))
                                }
                              />
                              <input
                                value={editedAddress.house}
                                type="text"
                                placeholder="Enter House No. , Road , Colony"
                                onChange={(e) =>
                                  setEditedAddress((prevState) => ({
                                    ...prevState,
                                    house: e.target.value,
                                  }))
                                }
                              />
                              <input
                                type="text"
                                value={editedAddress.city}
                                placeholder="Enter City"
                                onChange={(e) =>
                                  setEditedAddress((prevState) => ({
                                    ...prevState,
                                    city: e.target.value,
                                  }))
                                }
                              />
                              <input
                                type="text"
                                placeholder="Enter State"
                                value={editedAddress.stateName}
                                onChange={(e) =>
                                  setEditedAddress((prevState) => ({
                                    ...prevState,
                                    stateName: e.target.value,
                                  }))
                                }
                              />

                              <input
                                type="number"
                                placeholder="Enter Postal Code"
                                value={editedAddress.postalCode}
                                onChange={(e) =>
                                  setEditedAddress((prevState) => ({
                                    ...prevState,
                                    postalCode: e.target.value,
                                  }))
                                }
                              />
                              <input
                                type="tel"
                                placeholder="Enter Mobile Number"
                                value={editedAddress.mobile}
                                onChange={(e) =>
                                  setEditedAddress((prevState) => ({
                                    ...prevState,
                                    mobile: e.target.value,
                                  }))
                                }
                              />
                              <div className="form-actions">
                                <button type="submit">Save</button>
                                <button onClick={() => setEditAddress(false)}>
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              <div className="add-address">
                <h3 onClick={() => setIsFormOpen(true)}>+ Add New Address</h3>
              </div>
            </div>
          )}
        </div>
      </div>
      {isFormOpen && (
        <div className={`modal ${isFormOpen ? "open" : ""} `}>
          <div className="addressForm-container">
            <form onSubmit={addressFormHandler} className="form-address">
              <h2>Add New Address</h2>
              <input
                value={formData.name}
                type="text"
                placeholder="Enter Name"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                value={formData.house}
                placeholder="Enter House No. , Road , Colony"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    house: e.target.value,
                  }))
                }
              />
              <input
                value={formData.city}
                type="text"
                placeholder="Enter City"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    city: e.target.value,
                  }))
                }
              />
              <input
                value={formData.stateName}
                type="text"
                placeholder="Enter State"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    stateName: e.target.value,
                  }))
                }
              />

              <input
                value={formData.postalCode}
                type="number"
                placeholder="Enter Postal Code"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    postalCode: e.target.value,
                  }))
                }
              />
              <input
                value={formData.mobile}
                type="tel"
                placeholder="Enter Mobile Number"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    mobile: e.target.value,
                  }))
                }
              />
              <div className="form-actions">
                <button type="submit">Save</button>
                <button onClick={() => setIsFormOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountInfo;
