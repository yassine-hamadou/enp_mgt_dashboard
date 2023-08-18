import axios from 'axios'
/*
 Use this file to define your base URLs whether on localhost or on the ENP server
 */
// export const ENP_URL = 'http://localhost:3001'
// export const ENP_URL = 'https://cors-anywhere.herokuapp.com/https://app.sipconsult.net/SmWebApi/api'
// https://app.sipconsult.net/
// export const ENP_URL = 'https://app.sipconsult.net/SmWebApi/api'
// export const ENP_HR = 'https://app.sipconsult.net/hrWebApi/api'
// export const ENP_USERS = 'https://app.sipconsult.net/hrwebapi/api/Users'

export const ENP_URL = 'https://208.117.44.15/SmWebApi/api'
export const ENP_HR = 'https://208.117.44.15/hrWebApi/api'
export const ENP_USERS = 'https://208.117.44.15/hrwebapi/api/Users'

// export const ENP_URL = 'http://localhost:4192'

export const fetchEquips = () => {
  return axios.get(`${ENP_URL}/VmequpsApi`)
}
export const fetchModels = () => {
  return axios.get(`${ENP_URL}/VmmodlsApi`)
}
export const fetchBrands = () => {
  return axios.get(`${ENP_URL}/LubeBrands`)
}
export const fetchHours = () => {
  return axios.get(`${ENP_URL}/HoursEntry`)
}
export const fetchCompartments = () => {
  return axios.get(`${ENP_URL}/Compartment`)
}
export const fetchLubeBrands = () => {
  return axios.get(`${ENP_URL}/LubeBrands`)
}
export const fetchRefillTypes = () => {
  return axios.get(`${ENP_URL}/RefillType`)
}
export const fetchLubeConfigs = () => {
  return axios.get(`${ENP_URL}/LubeConfigs`)
}
export const fetchLubeGrade = () => {
  return axios.get(`${ENP_URL}/LubeGrades`)
}
export const fetchSections = () => {
  return axios.get(`${ENP_URL}/Sections`)
}
export const fetchServices = () => {
  return axios.get(`${ENP_URL}/Services`)
}
export const fetchGroups = () => {
  return axios.get(`${ENP_URL}/Groups`)
}
export const fetchItems = () => {
  return axios.get(`${ENP_URL}/Items`)
}
export const fetchItemValue = () => {
  return axios.get(`${ENP_URL}/ItemValue`)
}

export const fetchDashBoardData = () => {
  return axios.get(`${ENP_HR}/SortedData`)
}

export function fetchDocument(url: string) {
  return axios.get(`${ENP_URL}/${url}`)
}
