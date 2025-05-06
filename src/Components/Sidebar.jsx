import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiHomeAccount,
  mdiAccountMultiple,
  mdiMessageBadge,
  mdiHistory,
  mdiCalendarCheck,
  mdiAccountGroup,
  mdiCog,
  mdiCloudQuestion,
  mdiSecurity,
  mdiBellAlertOutline,
  mdiSearchWeb
} from '@mdi/js';

import { MdStars, MdRemoveRedEye } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";

import "../App.css";

const Sidebar = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="dashboard-heading">
          <Icon className="dashboard-icon" path={mdiViewDashboard} size={1} /> Dashboard
        </h2>
        <ul className="sidebar-icons">
          <li><Icon className="sidebar-icon" path={mdiHomeAccount} size={1} /> Home</li>
          <li><Icon className="sidebar-icon" path={mdiAccountMultiple} size={1} /> Profile</li>
          <li><Icon className="sidebar-icon" path={mdiMessageBadge} size={1} /> Messages</li>
          <li><Icon className="sidebar-icon" path={mdiHistory} size={1} /> History</li>
          <li><Icon className="sidebar-icon" path={mdiCalendarCheck} size={1} /> Tasks</li>
          <li><Icon className="sidebar-icon" path={mdiAccountGroup} size={1} /> Communities</li>
          <li className="settings-icon"><Icon className="sidebar-icon" path={mdiCog} size={1} /> Settings</li>
          <li><Icon className="sidebar-icon" path={mdiCloudQuestion} size={1} /> Support</li>
          <li><Icon className="sidebar-icon" path={mdiSecurity} size={1} /> Privacy</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="search-bar">
            <Icon path={mdiSearchWeb} size={1} style={{ marginLeft: '2rem', verticalAlign: 'middle' }} />
            <input className="input-container" type="text" placeholder="search" />
          </div>
          <div className="top-actions">
            <Icon path={mdiBellAlertOutline} size={1} />
            <div className="profile-info">
              <span className="profile-name">Morgan Oakley</span>
              <img className="topbar-image" src="download.jpg" alt="Profile" />
            </div>
          </div>
        </div>

        {/* Profile Bar */}
        <div className="top-bar">
          <div className="profile-bar">
            <img className="profilebar-image" src="download.jpg" alt="Profile" />
            <span className="profile-name">
              Hi there,<br />
              <span className="profile-username"> Morgan Oakley(@morgan) </span>
            </span>
          </div>
          <div className="button-bar">
            <div className="buttons">
              <button>New</button>
              <button>Upload</button>
              <button>Share</button>
            </div>
          </div>
        </div>

        <hr />

        {/* Project Section */}
        <div className='Project-Announcement'> 
          <div className='project-section'>
        <div className="project-header">
          <h2 className="heading-project">Your Projects</h2>
        </div>

        <div className="project-content">
          <div className="six-boxes">
            <h2 className="heading">Super Cool Project</h2>
            <p className="paragraph">
              Super cool content captivates its audience with a perfect mix of creativity, value, and personality.
              The project includes dynamic features, responsive design, and intuitive navigation, all wrapped up in 
              a clean and stylish interface.
            </p>
            <div className="box-icons">
              <div className="three-icons"><MdStars /></div>
              <div className="three-icons"><MdRemoveRedEye /></div>
              <div className="three-icons"><IoShareSocial /></div>
            </div>
          </div>

          <div className="six-boxes">
            <h2 className="heading">Less Cool Project</h2>
            <p className="paragraph">
              A less cool project often lacks the spark that makes something engaging. It might work, but isn’t exciting.
              Even though it doesn’t involve any fancy animations or advanced features, it’s a great chance to practice consistency, 
              structure, and clear problem-solving.
            </p>
            <div className="box-icons">
              <div className="three-icons"><MdStars /></div>
              <div className="three-icons"><MdRemoveRedEye /></div>
              <div className="three-icons"><IoShareSocial /></div>
            </div>
          </div>

          <div className="six-boxes">
            <h2 className="heading">Impossible App</h2>
            <p className="paragraph">
              The Impossible App is bold and tackles challenges with cutting-edge tech. It redefines what's possible.
              Every step forward reveals new challenges, whether it’s about performance, design, or just getting things to work together. 
            </p>
            <div className="box-icons">
              <div className="three-icons"><MdStars /></div>
              <div className="three-icons"><MdRemoveRedEye /></div>
              <div className="three-icons"><IoShareSocial /></div>
            </div>
          </div>

          <div className="six-boxes">
            <h2 className="heading">Easy Peasy App</h2>
            <p className="paragraph">
              The Easy Peasy App makes tasks super simple. It's built for ease of use and saves time.
              The goal is to create something functional without overcomplicating anything, using 
              straightforward design, minimal code, and clean logic.
            </p>
            <div className="box-icons">
              <div className="three-icons"><MdStars /></div>
              <div className="three-icons"><MdRemoveRedEye /></div>
              <div className="three-icons"><IoShareSocial /></div>
            </div>
          </div>

          <div className="six-boxes">
            <h2 className="heading">Ad Blocker</h2>
            <p className="paragraph">
              Ad Blocker removes annoying ads and popups. It helps you browse faster and safer...
              
            </p>
            <div className="box-icons">
              <div className="three-icons"><MdStars /></div>
              <div className="three-icons"><MdRemoveRedEye /></div>
              <div className="three-icons"><IoShareSocial /></div>
            </div>
          </div>

          <div className="six-boxes">
            <h2 className="heading">Money Maker</h2>
            <p className="paragraph">
              The Money Maker app turns skills into income. Manage your freelance work, products, or passive income easily...
            </p>
            <div className="box-icons">
              <div className="three-icons"><MdStars /></div>
              <div className="three-icons"><MdRemoveRedEye /></div>
              <div className="three-icons"><IoShareSocial /></div>
            </div>
          </div>
          </div>
        </div>

       {/* Announcements */}
       <div className='Announcement-Section'>
       <div className='Announcement-heading'> <h2>Announcements</h2> </div>

       <div className="Announcement-content">

        <h2 className='side-board'> Site Maintenance </h2>
        <p className='sideboard-para'> Site maintenance is the process of regularly checking
           and updating.
        </p>
        <hr />

        <h2 className='side-board'> Community Share Day </h2>
        <p className='sideboard-para'> Community Share Day is a special event where members of a 
            community come together.        
        </p>
        <hr />

        <h2 className='side-board'> Updated Privacy Policy </h2>
        <p className='sideboard-para'> Our updated privacy policy reflects our ongoing commitment to protecting your personal 
            information.
        </p>

       </div>

      
      <div className='Trending-section'> 
        <div className='Trending-heading'>
          Trending 
          </div>

      <div className='Trending-content'>

       <div className='trending-item'> 
        <img className='trending-images' src='download.jpg' alt='profile' />
         <div className='trending-text'>
          <span className='trending-user'>@tegan</span>
          <span className='trending-description'>World Peace Builder</span>
       </div>
       </div>
       
      <div className='trending-item'> 
        <img className='trending-images' src='download-1.png' alt='profile' />
         <div className='trending-text'>
          <span className='trending-user'>@morgan</span>
          <span className='trending-description'>Super Cool Project</span>
      </div>
      </div>

      <div className='trending-item'> 
        <img className='trending-images' src='download-2.jpg' alt='profile' />
         <div className='trending-text'>
          <span className='trending-user'>@Kendall</span>
          <span className='trending-description'>Life Changing App</span>
       </div>
       </div>

       <div className='trending-item'> 
        <img className='trending-images' src='download-3.jpg' alt='profile' />
         <div className='trending-text'>
          <span className='trending-user'>@Alex</span>
          <span className='trending-description'>No Traffic Maker</span>
       </div>
       </div>

       <div className='trending-item'> 
        <img className='trending-images' src='download-4.webp' alt='profile' />
         <div className='trending-text'>
          <span className='trending-user'>@Shah Rukh Khan</span>
          <span className='trending-description'>Super Star</span>
       </div>
       </div>
     </div>
     </div>
      </div>    
    </div>
      </main>
    </div>
  );
};

export default Sidebar;
