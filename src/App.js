import logo from './logo.svg';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Footer from'./components/Footer';
import Card from './components/Card';

function App() {
  let data = [{
    title: "Fancy product",
    price: "$40.00",
    lineprice:"",
    staricon:"",
    star:" ",
    amount:"$80.00",
    name:"",
    nameicon:" " ,
  },
  {
    title: "Special Item",
    price: "$20.00",
    lineprice:"text-muted text-decoration-line-through",
    staricon:"glyphicon glyphicon-star",
    star:" ",
    amount:"$18.00",
     name:"sale",
    nameicon:" "
  },
  {
    title: "Sale Item",
    price: "$50.00",
    lineprice:"text-muted text-decoration-line-through",
    staricon:" ",
    star:"",
    amount:"$25.00",
   name:"sale",
    nameicon:" "
  },
  {
    title: "Popular Item",
    price: "$40.00",
    lineprice:"",
    staricon:"glyphicon glyphicon-star",
    star:"",
    amount:" ",
     name:"",
    nameicon:" "
  },{
    title: "Sale Item",
    price: "$50.00",
    lineprice:"",
    staricon:"",
    star:"",
    amount:"$25.00",
     name:"sale",
    nameicon:" "
  },{
    title: "Fancy Product",
    price: "$120.00",
    lineprice:"",
    staricon:"",
    star:"",
    amount:"$280.00",
     name:"",
    nameicon:" "
  },{
    title: "Special Item",
    price: "$20.00",
    lineprice:"text-muted text-decoration-line-throughtext-muted text-decoration-line-through",
    staricon:"glyphicon glyphicon-star",
    star:"",
    amount:"$18.00",
     name:"sale",
    nameicon:" "
  },{
    title: "Popular Item",
    price: "$40.00",
    lineprice:"",
    staricon:"glyphicon glyphicon-star",
    star:"",
     name:"",
    nameicon:" "
  },];

  return (
    <div>
      <Header/>
    <section >
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
   
      {
             data.map((e, i) => {
              return <Card cardData={e} key={i} />
             })
            }

      </div>
    </div>
  </section>

  <Footer/>
    
  
  
  

    

  
</div>



    
    
    
  );
}

export default App;
