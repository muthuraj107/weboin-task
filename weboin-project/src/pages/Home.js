import React, { useEffect, useState } from "react";
import Head from "../components/Head/Head";
import "./Home.css";
import axios from "axios";
import Endfooter from "../components/footer/Endfooter";
import certificate from ".././assets/logo/medal.png";
import know from ".././assets/logo/thought.png";
import hand from ".././assets/logo/training.png";
import dashbord from "../assets/img/AboutDashboard.png";
import { img } from "./img";
export default function Home() {
  const [data, setData] = useState([]);
  const url = "https://weboin-task.onrender.com";
  const studentLendth = data?.length;
  const calculateStatusCounts = (studentsArray) => {
    return studentsArray.reduce(
      (acc, student) => {
        if (student.status === "Placed") {
          acc.placed += 1;
        } else if (student.status === "Unplaced") {
          acc.unplaced += 1;
        }
        return acc;
      },
      { placed: 0, unplaced: 0 }
    );
  };
  const stautscount = calculateStatusCounts(data);
  const placed = stautscount.placed;
  const unplaced = stautscount.unplaced;

  const getData = async () => {
    try {
      const res = await axios.get(url + "/api/user/data");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head />
      <div className="home-content">
        <section className="display">
          <div>
            <h2>Our Placement Partners</h2>
            <div className="display-img">
              {img?.map((val) => (
                <div className="img-card">
                  <img src={val.src} alt="logo"></img>
                </div>
              ))}
            </div>
          </div>

          <p className="btn-1">and,more companies</p>
        </section>

        <section className="main-content">
          <div>
            <div className="main-lead">
              <p>Open Source theme and ui components</p>
              <h2>
                Geaux Astro helps you craft beautiful websites efficiently
              </h2>
            </div>

            <div className="main-icons">
              <div>
                <div className="icons icon1">
                  <img src={certificate} alt="medol" />
                  <div className="icon-content">
                    <h3>Certificate Distribution</h3>
                    <p>
                      We offer certificates to validate and recognize your
                      achievement.
                    </p>
                  </div>
                </div>
                <div className="icons icon2">
                  <img src={know} alt="medol" />
                  <div className="icon-content">
                    <h3>Knowledge</h3>
                    <p>
                      We deliver transformative knowledge that empowers and
                      inspires.
                    </p>
                  </div>
                </div>
                <div className="icons icon3">
                  <img src={hand} alt="medol" />
                  <div className="icon-content">
                    <h3>Hands-on Experience</h3>
                    <p>
                      We provide hands-on experience for real-world learning.
                      You learn best by doing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="icon-img">
                <img src={dashbord} alt="dashbord" />
              </div>
            </div>
          </div>
        </section>
        <section className="details">
          <div>
            <div className="details-content">
              <div className="details-lead">
                <div>
                  <h1>
                    <p>Empower your future with cutting-edge skills</p>
                    <span>
                      New, Embrace innovation, master technology, &amp; shape
                      the digital world
                    </span>
                    <p>Your journey to success starts here.</p>
                  </h1>
                </div>
              </div>
              <div className="details-side">
                <p>
                  Join our course with a proven track record of success, where
                  learning isn't just about gaining skills; it's about growing
                  them. Join us, learn with confidence, and watch your skills
                  soar.
                </p>
                <div className="details-card">
                  <div className="card card1">
                    <div>
                      <div className="card-head">Total students</div>
                      <p>{studentLendth || 11}</p>
                    </div>
                  </div>
                  <div className="card card2">
                    <div>
                      <div className="card-head">Placed Students</div>
                      <p> {placed || 5}</p>
                    </div>
                  </div>
                  <div className="card card3">
                    <div>
                      <div className="card-head">Unplaced Students</div>
                      <p>{unplaced || 6}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Endfooter />
    </div>
  );
}
