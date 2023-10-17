import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [newEntry, setNewEntry] = useState({
    id: '',
    startDate: '',
    endDate: '',
    monthYear: '',
    excludedDates: '',
    leadCount: '',
    expectedDDR: '',
    lastUpdated: '',
  });

  const handleAddEntry = () => {
    setData((prevData) => [...prevData, newEntry]);
    setNewEntry({
      id: '',
      startDate: '',
      endDate: '',
      monthYear: '',
      excludedDates: '',
      leadCount: '',
      expectedDDR: '',
      lastUpdated: '',
    });
  };

  return (
    <main className="content">
      <h2>Data Entry</h2>
      <div className="data-entry-form">
        {/* Input fields for each data point */}
        <input
          type="text"
          placeholder="ID"
          value={newEntry.id}
          onChange={(e) => setNewEntry({ ...newEntry, id: e.target.value })}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={newEntry.startDate}
          onChange={(e) => setNewEntry({ ...newEntry, startDate: e.target.value })}
        />
        {/* Add similar input fields for the other data points */}
        <button onClick={handleAddEntry}>Add Entry</button>
      </div>

      <div className="display-data">
        <h2>Display Data</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Month-Year</th>
              <th>Excluded Dates</th>
              <th>Lead Count</th>
              <th>Expected DDR</th>
              <th>Last Updated</th>
              <th>Number of Days</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.id}</td>
                <td>{entry.startDate}</td>
                <td>{entry.endDate}</td>
                <td>{entry.monthYear}</td>
                <td>{entry.excludedDates}</td>
                <td>{entry.leadCount}</td>
                <td>{entry.expectedDDR}</td>
                <td>{entry.lastUpdated}</td>
                {/* Calculate and display the number of days */}
                <td>
                  {entry.startDate && entry.endDate
                    ? calculateNumberOfDays(entry.startDate, entry.endDate)
                    : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

const calculateNumberOfDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInTime = end - start;
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays;
};

export default App;
