import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <img
              alt="image"
              src="/images/logo.png"
              className="home-logo"
            />
            <nav className="home-links">
              <a href="#home" className="home-link">
                Home
              </a>
              <a href="#about-us" className="home-link01">
                Domain
              </a>
              <a href="#milestones" className="home-link01">
                Milestones
              </a>
              <a href="#functions" className="home-link01">
                Functions
              </a>
              <a href="#team" className="home-link01">
                Team
              </a>
              <a href="#documents" className="home-link01">
                Documentations
              </a>
            </nav>
          </div>
        </header>
        <div id="home" className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <h1 className="home-header07">
              System for detection and track treatment process for vascular dementia
              </h1>
              <p className="home-caption6">
              Welcome to Cognitive Performance Tracker official web site, your trusted partner in the fight against vascular dementia. 
              We are proud to introduce our cutting-edge mobile app designed to transform the way we detect and monitor this challenging condition. 
              With the power of the NUCOG assessment tool, we've created an accurate and user-friendly solution to change lives for the better.
              By focusing on four cognative functionaliies of patients, we provide accurate and reliable information about patients well being.
              </p>
            </div>
          </div>
          <div className="home-image11">
            <img
              alt="image"
              src="images/doctor.png"
              className="home-image12"
            />
          </div>
        </div>
        <div className="home-features">
          <h3 className="home-features-head">Focused Cognitive Functionalities</h3>
          <div className="home-content01">
            <div className="features-section quick-links">
              <a href="#orientation">
                <div className="features-heading">
                  <h3 className="features-header"> Orientation & Mathematical Skills</h3>
                </div>
                <p className="features-text">
                  Analyzing and monitoring of dementia stages through mathematical questions.
                </p>
              </a>
              <div className="features-divider"></div>
            </div>
            <div className="features-section quick-links">
              <a href="#command">
                <div className="features-heading">
                  <h3 className="features-header"> Command Following Skills</h3>
                </div>
                <p className="features-text">
                  Detect and track the risk of vascular dementia by analyzing the ability to follow simple commands. 
                </p>
              </a>
              <div className="features-divider"></div>
            </div>
            <div className="features-section quick-links">
              <a href="#hand">
                <div className="features-heading">
                  <h3 className="features-header"> Hand Writing Skills</h3>
                </div>
                <p className="features-text">
                  Analyzing and monitoring of dementia stages through writing skills analysis.
                </p>
              </a>
              <div className="features-divider"></div>
            </div>
            <div className="features-section quick-links">
              <a href="#speak">
                <div className="features-heading">
                  <h3 className="features-header"> Speaking Skills</h3>
                </div>
                <p className="features-text">
                  Analyzing and monitoring of dementia stages through speech analysis.
                </p>
              </a>
              <div className="features-divider"></div>
            </div>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <section id="about-us" className="home-why">
        <div className="home-heading09">
          <h2 className="home-header08">About App</h2>
          <p className="home-header09">
          At Cognitive Performance Tracker, we are dedicated to making a significant impact in the fight against dementia, 
          a disease that affects millions worldwide, disrupting daily lives, relationships, and aspirations. 
          Our mission is to transform the landscape of dementia care, particularly focusing on vascular dementia, 
          which accounts for a substantial percentage of cases. Vascular dementia results from reduced blood supply to the brain, 
          often caused by conditions such as stroke, high blood pressure, and atherosclerosis.
          <br/>

          We understand the challenges posed by dementia and the critical importance of early detection and personalized treatment. 
          This understanding has led us to develop a state-of-the-art system for early detection and continuous monitoring of vascular dementia. 
          Our approach combines natural language processing and machine learning to provide accurate, individualized assessments of cognitive functions.
          <br/>

          While commonly used tests like NUCOG and MMSE have their merits, they may not fully capture the nuances of vascular dementia. 
          Therefore, our project aims to create customized cognitive assessments tailored to this specific condition. 
          These assessments will not only enhance diagnostic accuracy but also support ongoing illness progression tracking and data-driven treatment adjustments.
          <br/>

          Our system is designed to empower healthcare professionals and caregivers with a user-friendly interface, 
          allowing easy access to patient information, cognitive test results, treatment plans, and real-time progress tracking. 
          Early detection is the key to successful treatment, and our platform is geared towards achieving this goal.
          <br/>

          We are committed to the continuous improvement of our system and its practicality. 
          The effectiveness and usability of our platform will be rigorously tested and evaluated to ensure it meets the highest standards. 
          The insights gained from these evaluations will guide our future development and improvements.
          <br/>

          Join us in the fight against dementia, and together, let's improve the lives of those affected by this challenging condition. 
          Cognitive Performance Tracker is your partner in the journey towards a brighter, healthier future.
          </p>
        </div>
        <section className="home-news">
          <div className="home-list2">
            <div className="home-item1">
              <div className="home-image23">
                <img
                  alt="image"
                  src="/images/dementia.png"
                  className="home-image24"
                />
              </div>
              <div className="home-content10">
                <div className="home-details1">
                <h3 className="home-header10">
                  Our Objective
                </h3>
                  <p className="home-header11">
                  Our mobile app aims to introduce a groundbreaking system utilizing the NUCOG assessment tool for the early detection and ongoing monitoring of vascular dementia treatment progress. 
                  We are dedicated to improving the quality of life for individuals affected by vascular dementia by providing accurate, accessible, and personalized solutions for early intervention and enhanced treatment outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-item2">
              <div className="home-image26">
                <img
                  alt="image"
                  src="/images/dementia2.jpg"
                  className="home-image27"
                />
              </div>
              <div className="home-content11">
                <div className="home-details2">
                  <h3 className="home-header10">
                    Research Problem
                  </h3>
                  <p className="home-header11">
                    Vascular dementia, affecting millions of individuals globally, presents a significant healthcare challenge. 
                    Accurate and timely detection, as well as reliable tracking of treatment progress, are paramount to improving the quality of life for affected patients. 
                    This research seeks to address the following problem: How can we develop and implement a highly accurate system for the early detection and continuous monitoring of vascular dementia, 
                    facilitating precise tracking of patients' cognitive functions and treatment progress, thereby enhancing overall patient care and outcomes?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-list2">
            <div className="home-item1">
              <div className="home-imae28">
                <img
                  alt="image"
                  src="/images/overvew.jpg"
                  className="home-imae29"
                />
              </div>
              <div className="home-content10">
                <div className="home-details1">
                <h3 className="home-header10">
                  Methodology
                </h3>
                <p className="home-header11">
                    Our approach involves creating a user-friendly system inspired by the NUCOG and MMSE tests. 
                    It employs targeted questions to assess various cognitive functions in patients. 
                    By analyzing responses and assigning scores, we provide a comprehensive evaluation. 
                    This system tracks progress over time, enabling personalized treatment plans based on cognitive development. 
                    We focus on assessing writing, speaking, command following, orientation, and mathematical abilities. 
                    A standardized scoring system ensures consistent and reliable evaluations within each cognitive domain.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-item2">
              <div className="home-image23">
                <img
                  alt="image"
                  src="/images/dementia3.jpg"
                  className="home-image24"
                />
              </div>
              <div className="home-content10">
                <div className="home-details2">
                  <h3 className="home-header10">
                  Technologies
                  </h3>
                  <p className="home-header11">
                    MobileNetV2, a lightweight deep learning algorithm, was trained on a labeled dataset to predict dementia based on writing skills.
                    <br/>
                    Inception V3, known for its ability to capture intricate patterns, was employed to predict dementia using a labeled dataset associated with simple commands. 
                    <br/>
                    Speech analysis for dementia prediction focus was on differentiating speech patterns to distinguish individuals with dementia from those without it. 
                    <br/>
                    Logistic Regression is a straightforward yet effective technique, while KNeighborsClassifier supports multi-class classification, 
                    making it suitable for complex decision boundaries and uncertain data distributions.
                    <br/>
                    Also to develop the mobile application, React Native as chosen as main architecture, MongoDB as database and NodeJs as Backend handler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="milestones" className="home-practices1">
        <div className="home-heading08">
          <h2 className="home-text14">Milestones</h2>
          <p className="home-text15">
            Four milestones that were infront of us in the road to success of the application.
          </p>
        </div>
        <div className="home-content02">
          <div className="home-grid1">
            <div className="home-practice-wrapper">
              <div className="practice-practice">
                <div className="practice-heading">
                  <h3 className="practice-header">Proposal Presentation</h3>
                  <p className="practice-caption"></p>
                </div>
                <a href="https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/EdTi3g8dhc1DmQEAzwXYbdwB2K4B-_v2ASivDmuePnW1RQ?e=6ZLrgq" target="_blank">
                  <div className="read-more">
                    <span className="practice-text">Presentation Slides</span>
                    <img alt="image" src="/images/arrow.svg" className="practice-image" />
                  </div>
                </a>
              </div>
            </div>
            <div className="home-practice-wrapper1">
              <div className="practice-practice">
                <div className="practice-heading">
                  <h3 className="practice-header">Progress Presentation 1</h3>
                  <p className="practice-caption"></p>
                </div>
                <a href="https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/ESiB_xjFR_FAhrQw9CDCwa0B1pWZ3BIePx2mzYMSXJ0xog?e=O1ljJU" target="_blank">
                  <div className="read-more">
                    <span className="practice-text">Presentation Slides</span>
                    <img alt="image" src="/images/arrow.svg" className="practice-image" />
                  </div>
                </a>
              </div>
            </div>
            <div className="home-practice-wrapper2">
              <div className="practice-practice">
                <div className="practice-heading">
                  <h3 className="practice-header">Progress Presentation 2</h3>
                  <p className="practice-caption"></p>
                </div>
                <a href="https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/EYYjTa7-CnVEjDlqJKcDVtwBJlFhX_UpsRB5ho1zyuezeQ?e=iAWuOC" target="_blank">
                  <div className="read-more">
                    <span className="practice-text">Presentation Slides</span>
                    <img alt="image" src="/images/arrow.svg" className="practice-image" />
                  </div>
                </a>
              </div>
            </div>
            <div className="home-practice-wrapper3">
              <div className="practice-practice">
                <div className="practice-heading">
                  <h3 className="practice-header">Final Presentation</h3>
                  <p className="practice-caption"></p>
                </div>
                <a href="https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/ERURMNL9nIBDgVqUnDI8hOcB51JPtRE4paFGKEX-L180aA?e=3m02zX" target="_blank">
                  <div className="read-more">
                    <span className="practice-text">Presentation Slides</span>
                    <img alt="image" src="/images/arrow.svg" className="practice-image" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="functions" className="home-features1">
        <div id="orientation" className="home-section6">
          <div className="home-content04">
            <div className="home-header12">
              <h2 className="home-heading10">
                Orientation & Mathematical Skills
              </h2>
              <p className="home-capton">
                This project focuses on evaluating the problem-solving abilities of dementia patients through a set of eleven well-structured questions on basic mathematics and orientation. 
                A team of specialists, including neurology and geriatrics experts, is working on creating this series, drawing inspiration from tests like MMSE and NUCOG.
                <br/>
                The questions are designed to be easy to understand and administer, tailored for individuals with dementia. To assess the series's effectiveness, 
                it will be tested on dementia patients and compared with a control group's results.
                <br/>
                In the survey, participants answered eleven questions with "Yes" or "No" responses. 
                The machine learning model will assign marks to each question following international standards. 
                Dementia has seven stages, and the model predicts the patient's stage based on their responses.
                <br/>
                Machine learning models, specifically "Logistic Regression" and "K Nearest Neighbor," are employed to predict dementia stages based on responses to the questions.
              </p>
            </div>
          </div>
          <img alt="image" src="/images/ss1.png" className="home-image15" />
        </div>
        <div id="command" className="home-section7">
          <div className="home-content05">
            <div className="home-header13">
              <h2 className="home-heading11">
                Command Following Skills
              </h2>
              <p className="home-capton1">
                The objective of this project is to develop a method for tracking the treatment progress of vascular dementia patients based on their ability to follow simple commands. 
                Reference questions from the NUCOG exams will guide this approach. The system will monitor patients' head and hand movements, assessing their cognitive abilities, and generating commands tailored to their cognitive capacities. 
                This enables healthcare providers to track patients' development and adjust treatment programs accordingly.
                <br />
                The proposed system employs machine learning algorithms to analyze the head and hand movements of vascular dementia patients as they follow simple commands. 
                It calculates scores based on patient performance, providing healthcare professionals with the means to monitor progress over time and make informed treatment decisions.
                <br />
                To facilitate the analysis of head and hand movements in vascular dementia patients, the system employs Google's Inception V3, a Convolutional Neural Network (CNN) architecture originally designed for image classification and object recognition. 
                It efficiently captures local and global features through various convolutional layers and pooling operations, allowing the network to extract varying levels of abstraction from input videos.
              </p>
            </div>
          </div>
          <img alt="image" src="/images/ss2.png" className="home-image17" />
        </div>
        <div id="hand" className="home-section6">
          <div className="home-content04">
            <div className="home-header12">
              <h2 className="home-heading10">
                Hand Writing Skills
              </h2>
              <p className="home-capton">
                The project aims to evaluate the cognitive abilities of individuals, especially those with dementia, with a focus on language, grammar, sentence completion, and executive function. 
                For this assessment, the project relies on established references like MMSE and NUCOG. Data on the writing ability of individuals with dementia is collected through standardized exams or by examining existing written samples.
                <br/>
                Regular writing samples are collected from individuals over time, in various contexts, such as cognitive assessments or daily activities. These samples are analyzed using automated methods and algorithms, notably the MobileNetV2, which is a CNN-based algorithm.
                Comparisons are made between a patient's current samples and their previous samples to identify differences or declines in skills. The analysis encompasses various aspects of the samples, like complexity and accuracy, revealing changes in patients' abilities over time, 
                which may not be readily noticeable to human observers.
                <br/>
                Dementia-related handwriting exhibits irregularities in letter size and spacing, making reading and comprehension challenging. In contrast, handwriting from individuals without dementia is characterized by clear letters and systematic spacing, making it more legible and easier to understand.
                These differences in handwriting serve as visual indicators of the cognitive changes associated with dementia. Leveraging these changes to detect patients and monitor their treatment progress is the primary objective of this function.
              </p>
            </div>
          </div>
          <img alt="image" src="/images/ss3.png" className="home-image15" />
        </div>
        <div id="speak" className="home-section7">
          <div className="home-content05">
            <div className="home-header13">
              <h2 className="home-heading11">
                Speaking Skills
              </h2>
              <p className="home-capton1">
                Speech analysis holds great promise for identifying cognitive decline associated with dementia. Changes in speech patterns, such as Mel frequency and pause duration, offer valuable insights into underlying cognitive impairments.
                <br />
                To explore this potential, the research collects speech samples from individuals of different age groups, including those with and without dementia. 
                Various speech tasks, including interviews, story-telling, and conversations, are used to capture different linguistic and cognitive aspects. 
                These samples undergo rigorous preprocessing to extract relevant features for analysis, focusing on linguistic and acoustic aspects.
                <br />
                Linguistic features encompass semantic and syntactic complexity, vocabulary richness, and speech coherence. Acoustic features delve into physiological aspects, including pitch, intensity, and speech rate. 
                These features serve as indicators of cognitive abilities and potential dementia risk.
                <br />
                To ensure the reliability and generalizability of the models, cross-validation techniques are employed. The dataset is divided into training and testing sets, and various metrics, including accuracy, precision, recall, and F1-score, are calculated to assess model efficacy. 
              </p>
            </div>
          </div>
          <img alt="image" src="/images/ss4.png" className="home-image17" />
        </div>
      </section>
      <section id="team" className="home-meet">
        <div className="home-heading18">
          <h2 className="home-text81">Meet Our Team</h2>
          <p className="home-text82">
            Four memebers of the group who developed the application to predict and track dementia through cognitive functionaliies.
          </p>
        </div>
        <div className="home-list1">
          <div className="home-doctors">
            <div className="doctor-doctor">
              <img
                alt="image"
                src="/images/dilanka.png"
                className="doctor-image"
              />
              <div className="doctor-heading">
                <h3 className="doctor-text">D. L. B. Weerasekara - IT20102678</h3>
                <p className="doctor-text1">
                  Mobile : 0714351717
                  <br />
                  Email : it20102678@my.sliit.lk
                  <br /><br />
                  Responsibility : Dementia Prediction through Simple Commands
                </p>
              </div>
            </div>
            <div className="doctor-doctor">
              <img
                alt="image"
                src="/images/anupriya.png"
                className="doctor-image"
              />
              <div className="doctor-heading">
                <h3 className="doctor-text">T. M. K. A. K. J. Thennakoon - IT20227272</h3>
                <p className="doctor-text1">
                  Mobile : 0774046655
                  <br />
                  Email : it20227272@my.sliit.lk
                  <br /><br />
                  Responsibility : Dementia Prediction through Writing Skills
                </p>
              </div>
            </div>
            <div className="doctor-doctor">
              <img
                alt="image"
                src="/images/nadun.png"
                className="doctor-image"
              />
              <div className="doctor-heading">
                <h3 className="doctor-text">T. M. N. M. B. Tennakoon - IT20070830</h3>
                <p className="doctor-text1">
                  Mobile : 0778918563
                  <br />
                  Email : it20070830@my.sliit.lk
                  <br /><br />
                  Responsibility : Dementia Prediction through Orientation & Mathematical Questions
                </p>
              </div>
            </div>
            <div className="doctor-doctor">
              <img
                alt="image"
                src="/images/ramesh.png"
                className="doctor-image"
              />
              <div className="doctor-heading">
                <h3 className="doctor-text">U. D. R. Lakmal - IT19090436</h3>
                <p className="doctor-text1">
                  Mobile : 0788880993
                  <br />
                  Email : it19090436@my.sliit.lk
                  <br /><br />
                  Responsibility : Dementia Prediction through Speech Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="documents" className="home-schedule">
        <div className="home-content07">
          <div className="home-header15">
            <h2 className="home-heading13">
              Other Documentations
            </h2>
          </div>
          <div className="home-types">
            <a
              href="https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EbsX2KDtoIhBtrkFyH7PU_wBJOfCbZU4IObsbRZdSbPkMw?e=qfQi1u"
              className="home-book-person button button-main button-white"
            >
              <span>Research Paper</span>
            </a>
            <a
              href="https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EY-kdvDp04dHpgaWJXnEdvgBHTSCgB7ZW7Ja8SPYJq9o_w?e=3KOe5j"
              className="home-book-person button button-main button-white"
            >
              <span>Project Charter</span>
            </a>
            <a
              href="https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EdoeHKlKlXNIrv-hptYjM_gBV9a82fe70_34j-I6W9qjYw?e=9MDVn9"
              className="home-book-person button button-main button-white"
            >
              <span>Topic Assesment Form </span>
            </a>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-left1">
          <div className="home-brand">
            <img
              alt="image"
              src="/images/logo.png"
              className="home-image32"
            />
          </div>
          <div className="home-legal">
            <span className="home-copyright">
              © 2023 Cognitive Performance Tracker. All Rights Reserved.
            </span>
          </div>
        </div>
        <div className="home-right1">
          <div className="home-list3">
            <span className="home-header16">Menu</span>
            <div className="home-links1">
              <a href="#home" className="home-link04">Home</a>
              <a href="#about-us" className="home-link05">Domain</a>
              <a href="#milestones" className="home-link06">Milestones</a>
              <a href="#functions" className="home-link07">Functions</a>
              <a href="#team" className="home-link08">Team</a>
              <a href="#documents" className="home-link08">Documentations</a>
            </div>
          </div>
          <div className="home-list5">
            <span className="home-header18">Contact</span>
            <div className="home-links3">
              <span className="home-link13">
                Sri Lanka Institute of Information Technology,
                <br/>
                Malabe,
                <br/>
                Colombo,
                <br/>
                Sri Lanka
              </span>
              <a
                href="https://www.sliit.lk"
                className="home-link14"
              >
                https://www.sliit.lk
              </a>
            </div>
          </div>
        </div>
        <div className="home-legal1">
          <div className="home-row3">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="home-copyright5">
            © 2023 Cognitive Performance Tracker. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className="scroll-to-top">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Scroll to Top
        </button>
      </div>
    </div>
  )
}

export default Home
