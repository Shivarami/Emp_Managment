import axios from 'axios';
const DB_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService {
    getEmployees(){
        return axios.get(DB_URL);
    }
    createEmployee(formData){
        return axios.post(DB_URL,formData)
    }
    getEmployeeById(id){
        return axios.get(DB_URL + '/' + id)
    }
    updateEmployee(employee,id){
        return axios.put(DB_URL + '/' + id,employee);
    }
    deleteEmployee(id){
        return axios.delete(DB_URL + '/' + id)
    }
}

export default new EmployeeService()