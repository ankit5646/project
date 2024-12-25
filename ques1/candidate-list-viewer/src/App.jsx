import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [candidates, setCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

  //calling from server
    useEffect(() => {
        axios.get("http://localhost:5000/api/candidates")
            .then(response => setCandidates(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

      // filter of skill and name
    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) || // search in name
        candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())  // search in skills
    );

    // Sorting
    const sortedCandidates = [...filteredCandidates].sort((a, b) => {
        return sortOrder === "asc" 
            ? a.experience - b.experience 
            : b.experience - a.experience;
    });

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Candidate List Viewer</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by Name or Skills"
                    className="p-2 border border-gray-300 rounded w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <button
                    className="p-2 bg-blue-500 text-white rounded"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                >
                    Sort by Experience ({sortOrder === "asc" ? "Ascending" : "Descending"})
                </button>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Skills</th>
                        <th className="border border-gray-300 p-2">Years of Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCandidates.map((candidate) => (
                        <tr key={candidate.id}>
                            <td className="border border-gray-300 p-2">{candidate.name}</td>
                            <td className="border border-gray-300 p-2">{candidate.skills}</td>
                            <td className="border border-gray-300 p-2">{candidate.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
