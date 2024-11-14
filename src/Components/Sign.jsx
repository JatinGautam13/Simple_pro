import React, { useState } from 'react'
import { X } from 'lucide-react';
import axios from 'axios';
import { Country, State, City } from 'country-state-city';


// const api= https://api.countrystatecity.in/v1/countries


const Sign = ({onClose})=> {

   // Predefined country code for India
   const indiaCode = "IN";

   // Fetch states of India
   const indianStates = State.getStatesOfCountry(indiaCode);
   console.log(indianStates)

   const [selectedState, setSelectedState] = useState("");
   const [cities, setCities] = useState([]);

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [num , setNum] = useState("")
    const [firstPass, setFirstPass] = useState("")
    const [secPass, setSecPass] = useState("")

    const submitHandler=(e)=>{
        e.preventDefault(e)

        if (!firstName || !lastName || !email || !num || !firstPass || !secPass) {
            alert("Please fill out all fields.");
            return;
        }
    
        if (firstPass !== secPass) {
            alert("Passwords do not match.");
            return;
        }
    
    }

    const handleStateChange = (e) => {
        const stateCode = e.target.value;
        setSelectedState(stateCode);

        // Get cities based on the selected state in India
        const cityList = City.getCitiesOfState(indiaCode, stateCode);
        setCities(cityList);
    };



  return (
    <div className='h-full w-full absolute top-0 right-0 insert-0 bg-black bg-opacity-30 backdrop-blur-sm '>
        <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md absolute left-[38%] top-[4%]">
            <button onClick={onClose} className=''><X/></button>
            <div class="text-center mb-6">
                <h2 class="text-green-600 text-2xl font-semibold">Create New Account</h2>

            </div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                {/* <!-- Name Fields --> */}
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">First Name</label>
                        <input value={firstName} onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} type="text" placeholder="First Name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Last Name</label>
                        <input value={lastName} onChange={(e)=>{
                            setLastName(e.target.value)  
                        }} type="text" placeholder="Last Name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                    </div>
                </div>
                {/* <!-- Contact Fields --> */}
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Phone</label>
                        <div class="relative mt-1">
                            <select class="absolute inset-y-0 left-0 pl-3 pr-8 border-r border-gray-300 bg-transparent text-gray-600 focus:outline-none focus:ring-green-500 focus:border-green-500">
                                <option>India</option>
                            </select>
                            <input value={num} onChange={(e)=>{
                                setNum(e.target.value)
                            }} type="tel" placeholder="Phone" class="pl-28 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Email</label>
                        <input value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                        }} type="email" placeholder="Email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                    </div>
                </div>
                {/* <!-- Password Fields --> */}
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Password</label>
                        <input value={firstPass} onChange={(e)=>{
                            setFirstPass(e.target.value)
                        }} type="password" placeholder="Password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input value={secPass} onChange={(e)=>{
                            setSecPass(e.target.value)
                        }} type="password" placeholder="Confirm Password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                    </div>
                </div>
                {/* <!-- Date of Birth Fields --> */}
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <div class="grid grid-cols-3 gap-4 mt-1">
                        <select class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                            <option>Day</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                        <select class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                            <option>Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <select class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                            <option>Year</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                            <option>2004</option>
                            <option>2003</option>
                            <option>2002</option>
                            <option>2001</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            <option>1997</option>
                            <option>1996</option>
                            <option>1995</option>
                            <option>1994</option>
                            <option>1993</option>
                            <option>1992</option>
                            <option>1991</option>
                            <option>1990</option>
                            <option>1989</option>
                            <option>1988</option>
                            <option>1987</option>
                            <option>1986</option>
                            <option>1985</option>
                            <option>1984</option>
                            <option>1983</option>
                            <option>1982</option>
                            <option>1981</option>
                            <option>1980</option>
                            <option>1979</option>
                            <option>1978</option>
                            <option>1977</option>
                            <option>1976</option>
                            <option>1975</option>
                            <option>1974</option>
                            <option>1973</option>
                            <option>1972</option>
                            <option>1971</option>
                            <option>1970</option>
                            <option>1969</option>
                            <option>1968</option>
                            <option>1967</option>
                            <option>1966</option>
                            <option>1965</option>
                            <option>1964</option>
                            <option>1963</option>
                            <option>1962</option>
                            <option>1961</option>
                            <option>1960</option>
                            <option>1959</option>
                            <option>1958</option>
                            <option>1957</option>
                            <option>1956</option>
                            <option>1955</option>
                            <option>1954</option>
                            <option>1953</option>
                            <option>1952</option>
                            <option>1951</option>
                            <option>1950</option>
                            <option>1949</option>
                            <option>1948</option>
                            <option>1947</option>
                            <option>1946</option>
                            <option>1945</option>
                            <option>1944</option>
                            <option>1943</option>
                            <option>1942</option>
                            <option>1941</option>
                            <option>1940</option>
                            <option>1939</option>
                            <option>1938</option>
                            <option>1937</option>
                            <option>1936</option>
                            <option>1935</option>
                            <option>1934</option>
                            <option>1933</option>
                            <option>1932</option>
                            <option>1931</option>
                            <option>1930</option>
                            <option>1929</option>
                            <option>1928</option>
                            <option>1927</option>
                            <option>1926</option>
                            <option>1925</option>
                            <option>1924</option>
                            <option>1923</option>
                            <option>1922</option>
                            <option>1921</option>
                            <option>1920</option>
                            <option>1919</option>
                            <option>1918</option>
                            <option>1917</option>
                            <option>1916</option>
                            <option>1915</option>
                            <option>1914</option>
                            <option>1913</option>
                            <option>1912</option>
                            <option>1911</option>
                            <option>1910</option>
                            <option>1909</option>
                            <option>1908</option>
                            <option>1907</option>
                            <option>1906</option>
                            <option>1905</option>
                        </select>
                    </div>
                </div>
                {/* <!-- Gender Fields --> */}
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Gender</label>
                    <div class="flex items-center space-x-4 mt-1">
                        <label class="flex items-center">
                            <input type="radio" name="gender" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"/>
                            <span class="ml-2 text-gray-700">Male</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="gender" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"/>
                            <span class="ml-2 text-gray-700">Female</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="gender" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"/>
                            <span class="ml-2 text-gray-700">Other</span>
                        </label>
                    </div>
                </div>
                {/* <!-- Location Fields --> */}
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">State</label>
                        <select value={selectedState} onChange={handleStateChange} class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                            <option>State</option>
                            {indianStates.map((state) => (
                                    <option key={state.isoCode} value={state.isoCode}>
                                        {state.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">City</label>
                        <select class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                            <option>City</option>
                            {cities.map((city) => (
                                <option key={city.name} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* <!-- Terms and Conditions --> */}
                <div class="mb-4 text-xs text-gray-600">
                    By Continuing, You Agree to Lzy Crazy <a href="#" class="text-blue-600 hover:underline">Term & Conditions</a> and Confirm that You have Read Lzy Crazy <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>.
                </div>
                {/* <!-- Submit Button --> */}
                <button type="submit" class="w-full bg-blue-900 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    SIGNUP
                </button>
            </form>
        </div>
    </div>
  )
}

export default Sign