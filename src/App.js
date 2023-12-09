import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewComponent from './components/ViewComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            {/* Use the `element` prop with a single React element */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <ListEmployeeComponent />
                  <Footer />
                </>
              }
            />
            <Route
              path="/employees"
              element={
                <>
                  <Header />
                  <ListEmployeeComponent />
                  <Footer />
                </>
              }
            />
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<><Header /><ViewComponent /><Footer /></>} />
            
            {/* <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} /> */}

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
