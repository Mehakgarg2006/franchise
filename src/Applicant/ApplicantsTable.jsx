import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const ApplicantsTable = () => {
    const [applications, setApplications] = useState([]);
    const [filterApplications, setFilterApplications] = useState([]);
    const [rowsLimit] = useState(2);
    const [rowsToShow, setRowsToShow] = useState([]);
    const [customPagination, setCustomPagination] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState("3");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getApplications();
    }, [filter]);

    useEffect(() => {
        setRowsToShow(filterApplications.slice(0, rowsLimit));
        setTotalPage(Math.ceil(filterApplications.length / rowsLimit));
    }, [filterApplications]);

    async function getApplications() {
        setLoading(true);
        let url = "http://localhost:2006/admin/showApplications";
        try {
            const response = await axios.post(url);
            const applicationsData = response.data;
            if (filter !== "3") {
                setFilterApplications(applicationsData.filter((application) => application.status === parseInt(filter)));
            } else {
                setFilterApplications(applicationsData);
            }
            setApplications(applicationsData);
            setRowsToShow(applicationsData.slice(0, rowsLimit));
            setTotalPage(Math.ceil(applicationsData.length / rowsLimit));
        } catch (error) {
            setError("Error fetching applications: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    const nextPage = () => {
        const startIndex = rowsLimit * (currentPage + 1);
        const endIndex = startIndex + rowsLimit;
        const newArray = filterApplications.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        setCurrentPage(currentPage + 1);
    };

    const changePage = (value) => {
        const startIndex = value * rowsLimit;
        const endIndex = startIndex + rowsLimit;
        const newArray = filterApplications.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        setCurrentPage(value);
    };

    const previousPage = () => {
        const startIndex = (currentPage - 1) * rowsLimit;
        const endIndex = startIndex + rowsLimit;
        const newArray = filterApplications.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(0);
        }
    };

    useMemo(() => {
        setCustomPagination(
            Array(Math.ceil(filterApplications?.length / rowsLimit)).fill(null)
        );
    }, [filterApplications]);

    async function doApprove(uid) {
        let obj = { uid: uid };
        let url = "http://localhost:2006/admin/approveApplication";
        try {
            const resp = await axios.post(url, obj, {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
            alert(resp.data);
            getApplications();
        } catch (error) {
            alert("Error approving application: " + error.message);
        }
    }

    async function doDecline(uid) {
        let obj = { uid: uid };
        let url = "http://localhost:2006/admin/declineApplication";
        try {
            const resp = await axios.post(url, obj, {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
            alert(resp.data);
            getApplications();
        } catch (error) {
            alert("Error declining application: " + error.message);
        }
    }

    // async function doFranchise(uid) {
    //     let obj = { uid: uid };
    //     let url = "http://localhost:2006/admin/allotFranchise";
    //     try {
    //         const resp = await axios.post(url, obj, {
    //             headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         });
    //         alert(resp.data);
    //         getApplications();
    //     } catch (error) {
    //         alert("Error franchising application: " + error.message);
    //     }
    // }


    const doFranchise = async (uid) => {
        let url = "http://localhost:2006/admin/allotFranchise";
        try {
          let resp = await axios.post(url,
            { uid, status: 2 },
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
          );
      
          if (resp.data.status) {
            alert(resp.data.msg);
            fetchData();
      
            const templateParams = {
              user_email: uid,
              user_id: uid,
              user_password: "your-generated-password" // Ensure a password is provided
            };
      
            console.log('Sending email with params:', templateParams);
      
            emailjs.send('service_9scsjz6', 'template_e8jre2i', templateParams, '_apARuaFJAxO32cUK')
              .then((result) => {
                alert("Mail sent to the user");
                console.log("Email sent successfully!", result.text);
              })
              .catch((error) => {
                console.error("Failed to send email:", error);
                alert("Failed to send email.");
              });
      
          } else {
            alert(resp.data.msg);
          }
        } catch (error) {
          console.error("Error updating user status:", error);
          alert("Failed to update user status.");
        }
      };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="min-h-screen h-full bg-white flex items-center justify-center pt-10 pb-14">
            <div className="w-full max-w-7xl px-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-medium">
                            Applications for Franchise
                        </h1>
                    </div>
                    <div>
                        <button onClick={getApplications} className="mx-5 bg-amber-500 px-2 py-1 rounded-2xl hover:bg-red-700 hover:text-gray-50 hover:ring-black hover:ring-2">Get Applications</button>
                        <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
                            <option value="3">All</option>
                            <option value="1">Approved</option>
                            <option value="-1">Declined</option>
                            <option value="2">Franchise</option>
                        </select>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll md:overflow-auto max-w-7xl 2xl:max-w-none mt-2">
                    <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border">
                        <thead className="rounded-lg text-base text-white font-semibold w-full">
                            <tr className="bg-[#222E3A]/[6%]">
                                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">ID</th>
                                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">Status</th>
                                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">Email ID</th>
                                <th className="py-3 px-3 justify-center gap-1 text-[#212B36] sm:text-base font-bold whitespace-nowrap">Site Address</th>
                                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">City</th>
                                <th className="py-3 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap">Area in sq.ft (floor)</th>
                                <th className="flex items-center py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap gap-1">Ownership</th>
                                <th className="py-3 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rowsToShow?.map((data, index) => (
                                <tr className={`${index % 2 === 0 ? "bg-white" : "bg-[#222E3A]/[6%]"}`} key={index}>
                                    <td className={`py-2 px-3 font-normal text-base ${index === 0 ? "border-t-2 border-black" : "border-t"} whitespace-nowrap`}>
                                        {currentPage * rowsLimit + index + 1}
                                    </td>
                                    <td className={`py-2 px-3 font-normal text-base ${index === 0 ? "border-t-2 border-black" : "border-t"} whitespace-nowrap`}>
                                        {data.status}
                                    </td>
                                    <td className={`py-2 px-3 font-normal text-base ${index === 0 ? "border-t-2 border-black" : "border-t"} whitespace-nowrap`}>
                                        {data.uid}
                                    </td>
                                    <td className={`py-2 px-3 font-normal text-base ${index === 0 ? "border-t-2 border-black" : "border-t"} whitespace-nowrap`}>
                                        {data.citeadd}
                                    </td>
                                    <td className={`py-2 px-3 text-base font-normal ${index === 0 ? "border-t-2 border-black" : "border-t"} whitespace-nowrap`}>
                                        {data.city}
                                    </td>
                                    <td className={`py-2 px-2 text-base font-normal ${index === 0 ? "border-t-2 border-black" : "border-t"} min-w-[250px]`}>
                                        {data.tarea} ({data.floor})
                                    </td>
                                    <td className={`py-5 px-4 text-base font-normal ${index === 0 ? "border-t-2 border-black" : "border-t"}`}>
                                        {data.radioname}
                                    </td>
                                    <td className={`py-5 px-4 text-base font-normal ${index === 0 ? "border-t-2 border-black" : "border-t"}`}>
                                        <div className="flex gap-2">
                                            <button className="py-3 rounded-full border-2 bg-yellow-600 hover:bg-yellow-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg" onClick={() => doApprove(data.uid)}>
                                                Approve
                                            </button>
                                            <button className="py-3 rounded-full border-2 bg-red-600 hover:bg-red-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg" onClick={() => doDecline(data.uid)}>
                                                Decline
                                            </button>
                                            <button className="py-3 rounded-full border-2 bg-green-600 hover:bg-green-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg" onClick={() => doFranchise(data.uid)}>
                                                Franchise
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
                    <div className="text-lg">
                        Showing {currentPage === 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
                        {currentPage === totalPage - 1 ? applications?.length : (currentPage + 1) * rowsLimit}{" "}
                        of {applications?.length} entries
                    </div>
                    <div className="flex">
                        <ul className="flex justify-center items-center gap-x-[10px] z-30" role="navigation" aria-label="Pagination">
                            <li className={`prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${currentPage === 0 ? "bg-[#cccccc] pointer-events-none" : "cursor-pointer"}`} onClick={previousPage}>
                                <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" />
                            </li>
                            {customPagination?.map((data, index) => (
                                <li className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${currentPage === index ? "text-blue-600 border-sky-500" : "border-[#E4E4EB]"}`} onClick={() => changePage(index)} key={index}>
                                    {index + 1}
                                </li>
                            ))}
                            <li className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${currentPage === totalPage - 1 ? "bg-[#cccccc] pointer-events-none" : "cursor-pointer"}`} onClick={nextPage}>
                                <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantsTable;
