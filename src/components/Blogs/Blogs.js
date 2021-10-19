import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import fatHealth from '../../images/blogImages/fat-health.jpg';
import goodHealth from '../../images/blogImages/goodHealth.jpg';
import happyMood from '../../images/blogImages/happyMood.jpg';
import energy from '../../images/blogImages/enargy.jpg';
import betterSleep from '../../images/blogImages/betterSleep.jpg'


const Blogs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-9 px-3">
                        <h3>Let's Know the Benefits of Exercise.</h3>
                        <p>Want to feel better, have more energy and even add years to your life? Just exercise.The health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, regardless of age, sex or physical ability.Need more convincing to get moving? Check out these seven ways that exercise can lead to a happier, healthier you.</p>
                        <br />
                        <div>
                            <h3 className="mt-3">1. Exercise controls weight</h3>
                            <img className="img-fluid w-100" src={fatHealth} alt="" />

                            <p className="my-3">Exercise can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories. The more intense the activity, the more calories you burn. <br />
                                Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day. Any amount of activity is better than none at all. To reap the benefits of exercise, just get more active throughout your day — take the stairs instead of the elevator or rev up your household chores. Consistency is key.
                            </p>
                        </div>
                        <div>
                            <h3 className="mt-3">2. Exercise combats health conditions and diseases</h3>
                            <img className="img-fluid w-100" src={goodHealth} alt="" />
                            <p className="my-3">Worried about heart disease? Hoping to prevent high blood pressure? No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, the "good" cholesterol, and it decreases unhealthy triglycerides. This one-two punch keeps your blood flowing smoothly, which decreases your risk of cardiovascular diseases.
                                <br />
                                Regular exercise helps prevent or manage many health problems and concerns, including:
                            </p>
                            <ul>
                                <li>Stroke</li>
                                <li>Metabolic syndrome</li>
                                <li>High blood pressure</li>
                                <li>Type 2 diabetes</li>
                                <li>Depression</li>
                                <li>Many types of cancer</li>
                                <li>Arthritis</li>
                                <li>Falls</li>
                            </ul>
                            <p>It can also help improve cognitive function and helps lower the risk of death from all causes.</p>
                        </div>
                        <div>
                            <h3 className="mt-3">3. Exercise improves mood</h3>
                            <img src={happyMood} className="img-fluid w-100" alt="" />

                            <p className="my-3">Need an emotional lift? Or need to destress after a stressful day? A gym session or brisk walk can help. Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed and less anxious. <br />
                                You may also feel better about your appearance and yourself when you exercise regularly, which can boost your confidence and improve your self-esteem.
                            </p>
                        </div>

                        <div>
                            <h3 className="mt-3">4. Exercise boosts energy</h3>
                            <img src={energy} className="img-fluid w-100" alt="" />

                            <p className="my-3">Winded by grocery shopping or household chores? Regular physical activity can improve your muscle strength and boost your endurance.
                                <br />

                                Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.
                            </p>
                        </div>

                        <div>
                            <h3 className="mt-3">5. Exercise promotes better sleep</h3>
                            <img src={betterSleep} className="img-fluid w-100" alt="" />

                            <p className="my-3">Struggling to snooze? Regular physical activity can help you fall asleep faster, get better sleep and deepen your sleep. Just don't exercise too close to bedtime, or you may be too energized to go to sleep.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-2">
                        {/* <h2>This is Blog</h2> */}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;