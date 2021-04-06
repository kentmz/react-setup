import axios from 'axios'

// export const DashboardService  =  () =>{
//   function GetAPIKey(): any {
//     return axios
//       .get(
//         'http://DWWebApi.com/api/account/GetApiKeyForDashboard?isExplicit=true'
//       )
//       .then(
//         (response) => {
//           console.log(response)
//         },
//         (error) => {
//           console.log(error)
//         }
//       )
//   }
// }

export class DashboardService {
  getAPIKey = () => {
    return axios
      .get(
        'http://DWWebApi.com/api/account/GetApiKeyForDashboard?isExplicit=true'
      )
      .then(
        (response) => {
          console.log('From service')
          console.log(response)
        },
        (error) => {
          console.log('From err')
          console.log(error)
        }
      )
  }
}
