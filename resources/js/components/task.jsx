import React from 'react'
import axios from 'axios'
import Flatpickr from 'react-flatpickr'

export default class TaskDialog extends React.Component {  

   constructor(props) {
     super(props);

     this.handleDate = this.handleDate.bind(this);
     this.handleName = this.handleName.bind(this);
     this.createTask = this.createTask.bind(this);
     this.categoryChange = this.categoryChange.bind(this);
     this.clickLogout = this.clickLogout.bind(this);
 
     this.state = {
        //name: localStorage.name, //!!!faster
        //api_token: localStorage.api_token, //!!!faster
        name: null, //!!!setTimeout
        api_token: null, //!!!setTimeout
        datecreate: new Date(),
        tasks: [],
        createName: '',
        createCategoryId: 1,
        categories: [],
     }
   }

   componentDidMount() {
      this.setState({ //!!!setTimeout
         name: localStorage.name,
         api_token: localStorage.api_token,
      });

      //this.listCategories(); //!!!faster
      //this.listTasks(); //!!!faster

      setTimeout(() => { //!!!
        this.listCategories();
        this.listTasks();
      }, "200"); 
   }

    listTasks() {
      let self = this;
 
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.api_token;
 
      axios
       .get('/api/tasks')
         .then(function (resp) {
             let arrRes = resp.data;
             console.log(arrRes);

             self.setState({
               tasks: arrRes,  
             });
         })
         .catch(function (resp) {
             alert("Could not load tasks");
         });
    }    

    listCategories() {
      let self = this;
 
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.api_token;
 
      axios
       .get('/api/categories')
         .then(function (resp) {
             let arrRes = resp.data;
             console.log(arrRes);

             self.setState({
              categories: arrRes,  
             });
         })
         .catch(function (resp) {
             console.log(resp.response);
             alert("Could not load categories");
         });
    }        

   handleDate(selectedDates, dateStr, instance) { 
      this.setState({datecreate: dateStr});
   }

   handleName(event) { 
      this.setState({createName: event.target.value});
   }

   categoryChange(event) {
      this.setState({createCategoryId: event.target.value});  
   }

   createTask() {
      let self = this;

      let newTask = {
         name: this.state.createName,
         datecreate: this.state.datecreate,   
         categoryId: this.state.createCategoryId,
      }
 
      //axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.api_token;
 
      axios
      .post('/api/tasks?api_token=' + this.state.api_token, newTask)
         .then(function (resp) {
             let arrRes = resp.data;
             console.log(arrRes);

             self.setState({
               tasks: arrRes, 
               
               createName: '',
               datecreate: new Date(),

               createCategoryId: 1,
             });
         })
         .catch(function (resp) {
             alert("Could not load tasks");

             console.log(resp.response);
         });
    } 
    
    clickRemove(id) {
      let self = this;
 
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.api_token;
 
      axios
       .delete('/api/tasks/' + id)
         .then(function (resp) {
             let arrRes = resp.data;
             console.log(arrRes);

             self.setState({
               tasks: arrRes,  
             });
         })
         .catch(function (resp) {
             alert("Could not load tasks");
         });
    }    
    
    clickLogout() {
      localStorage.name = ''; 
      localStorage.api_token = '';

      this.props.handleUser('', '');     
    }

   render() {
      return (
      <div className="row">
          <div className="col-md-2 text-right">
             <button className="btn btn-link" onClick={this.clickLogout}>Logout {this.state.name}</button>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div id="myDIV" className="header">
              <h2>My To Do List</h2>
              <div className="row">
                <div className="col-md-2">  
                  <Flatpickr className="w-100"
                           value={this.state.datecreate}
                           onChange={this.handleDate}
                        />
                </div>
                <div className="col-md-2">  
                  <select className="mySelect w-100" value={this.state.createCategoryId} onChange={this.categoryChange}>
                    {this.state.categories.map((item, key) =>
                     <option key={key} value={item.id}>{item.name}</option>  
                    )}            
                  </select>
                </div>
                <div className="col-md-5">  
                  <input type="text" id="myInput" placeholder="Title..." className="w-100" value={this.state.createName} onChange={this.handleName} />
                </div>  
                <div className="col-md-2">    
                  <span className="addBtn w-100" onClick={this.createTask}>Add</span>
                </div>  
              </div>
            </div>
            <div>
               <ul id="myUL">
                {this.state.tasks.map((item, key) =>  
                  <li key={key}><b>{item.datecreate}</b> <b>{item.category.name}</b> {item.name}
                  {(item.category.id == 3 || item.category.id == 4) && (
                    <span className="close" onClick={() => {this.clickRemove(item.id)}}>×</span>
                  )}
                  </li>    
                )}             
               </ul>
            </div>   
          </div>  
          <div className="col-md-2">
          </div>    
      </div>
      );      
   }

}
