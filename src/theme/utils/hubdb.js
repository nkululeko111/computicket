const axios = require('axios');

// Replace with your actual HubSpot private app token
const HUBSPOT_API_KEY = 'your-hubspot-api-key';
const BASE_URL = 'https://api.hubapi.com';

// Setup axios instance
const hubspot = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${HUBSPOT_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// Get all HubDB tables
async function getAllTables() {
  const response = await hubspot.get('/cms/v3/hubdb/tables');
  return response.data;
}

// Get a single table by ID or name
async function getTableByIdOrName(tableIdOrName) {
  const response = await hubspot.get(`/cms/v3/hubdb/tables/${tableIdOrName}`);
  return response.data;
}

// Get all rows from a specific table
async function getTableRows(tableIdOrName) {
  const response = await hubspot.get(`/cms/v3/hubdb/tables/${tableIdOrName}/rows`);
  return response.data;
}

// Create a new row in a table
async function createRow(tableIdOrName, values = {}) {
  const response = await hubspot.post(`/cms/v3/hubdb/tables/${tableIdOrName}/rows`, {
    values
  });
  return response.data;
}

// Update an existing row
async function updateRow(tableIdOrName, rowId, values = {}) {
  const response = await hubspot.patch(`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowId}`, {
    values
  });
  return response.data;
}

// Delete a row from a table
async function deleteRow(tableIdOrName, rowId) {
  const response = await hubspot.delete(`/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowId}`);
  return response.status === 204;
}

module.exports = {
  getAllTables,
  getTableByIdOrName,
  getTableRows,
  createRow,
  updateRow,
  deleteRow
};
