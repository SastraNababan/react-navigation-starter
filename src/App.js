import React from 'react';
import './App.css';

const Home = () => (
  <section>
    <h1> Home </h1>
  </section>
); 

const About = () => (
  <section> 
    <h1> About </h1>
  </section>
);

const Contact = () => (
  <section>
    <h1> Contact </h1> 
  </section>
);

const Dashboard = props => (
  <section>
    <h1> Dashboard </h1>
  </section>
);

const Blog = (props) => (
  <section>
    <h1> Blog </h1> 
  </section>
);


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              About <span class="caret"></span>
            </a>
            <div>
              <ul>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
