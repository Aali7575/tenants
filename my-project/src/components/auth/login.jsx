  /* eslint-disable react/prop-types */
  import {useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Cookies from "js-cookie";
  import ClipLoader from "react-spinners/ClipLoader"; 
  //import hrAuthStore from "../../../zustStores/hrStores/hrAuthStore";
  //import plantManagerAuthStore from "../../../zustStores/managerStores/managerAuthstore";
  // Removed unused import authStore
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const login = hrAuthStore(state => state.login);
    // const plantLogin = plantManagerAuthStore(state => state.plantLogin);
    // const [error, setError] = useState(null); // State to hold login error
    const [loading, setLoading] = useState(false);
    // user department
    const [department, setDepartment] = useState("");

    const handleDepartmentChange = (event) => {
      setDepartment(event.target.value);
      
      console.log(event.target.value);
    };

    const loginNavigate = async () => {
      
      if (department !== "") {
        setLoading(true);
        Cookies.set("department", department, { sameSite: "None", secure: true });


        try {
          switch (department) {
            case "fuel":
              // Handle login for fuel department
              // Example:
              // await fuelAuthStore.login(email, password);
              navigate("/app/fuel");
              break;

            case "plantmanagement":
              // Handle login for plant management department
              navigate("/app/plant");
              break;

            case "humanresourcesmanagement":
              // Handle login for human resources department
              navigate("/app/hr");
              break;

            case "workshopandgarage":
              // Handle login for workshop and garage department
              // Example:
              // await workshopAuthStore.login(email, password);
              navigate("/app/workshop");
              break;

            default:
              // Handle invalid department here
              console.error("Invalid department");
              setLoading(false); // Stop loading if department is invalid
              break;
          }
        } catch (error) {
          setLoading(false);
        }
      }
    };

    return (
      <div className="">
        <section>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative max-w-md mx-auto lg:max-w-lg mt-20 ">
              <div className="text-center mb-8">
                {/* <img
                  className="w-auto h-14 mx-auto"
                  src="https://i.ibb.co/gvwZRhL/256196497-105700978598111-893100860523888225-n-removebg-preview.png"
                  alt=""
                /> */}
                <h1 className="mt-6 text-3xl font-bold text-gray-900">Login</h1>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  Sign in to access your dashboard
                </p>
              </div>
              <div className="relative overflow-hidden bg-white shadow-xl rounded-md border border-green-100">
                <div className="px-4 py-6 sm:px-8">
                  <htmlForm>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900 font-pj"
                          >
                            {" "}
                            Company Email{" "}
                          </label>
                        </div>
                        <div className="mt-2.5">
                          <input
                            type="email"
                            name="companyEmail"
                            id="companyEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900 font-pj"
                          >
                            {" "}
                            Password{" "}
                          </label>

                          <a
                            href="#"
                            title=""
                            className="text-base font-medium text-gray-500 rounded font-pj hover:text-gray-900 hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                          >
                            {" "}
                          
                          </a>
                        </div>

                        <div className="mt-2.5">
                          <input
                            type="password"
                            name=""
                            id=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Your Password"
                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                          />
                        </div>

                        <div className="mt-2.5">
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor=""
                              className="pt-4 text-base font-medium text-gray-900 font-pj"
                            >
                              Department
                            </label>
                          </div>

                          <select
                            onChange={handleDepartmentChange}
                            name="accountType"
                            id="accountType"
                            className="block w-full px-4 py-4 mt-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                          >
                            <option>Select your role</option>
                            <option value="plantmanagement">
                              Tenant
                            </option>
                            <option value="fuel">Landlord</option>
                            <option value="humanresourcesmanagement">
                              Agent
                            </option>
                            <option value="workshopandgarage">
                              Service Provider
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      className="flex items-center justify-center w-full px-8 py-4 mt-5 text-base font-bold text-white transition-all duration-200 
                          bg-green-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 
                          font-pj hover:bg-green-800"
                          onClick={loginNavigate}
                          disabled={loading} // Disable the button while loading
                          >
                          <ClipLoader
                            loading={loading}
                            size={20}
                            aria-label="Loading Spinner"
                          />
                          {loading ? "Logging you in..." : "Proceed Log In"}
                    </button>
                  </htmlForm>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default Login;
