import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Fade from '@mui/material/Fade';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons'
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from "react";
const AppBar = () => {
	// const { current } = this.state;
	const [current, setCurrent] = useState();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	// const handleClick = (event) => {
	// 	setAnchorEl(event.currentTarget);
	// };
	const handleClick = (e) => {
		console.log('click ', e);
		setCurrent(e.key);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const { SubMenu } = Menu;
	const numStyle = {
		margin: '0 50px 0 50px', // 如果不是純數字，就要用字串格式
		color: 'black', 
		fontSize: 20, // 加 px 就要使用字串，這裡 px 可用可不用
	}
	const menu_home = (
		<Menu>
			<Menu.Item style={ numStyle }>
				<h4 target="_blank" rel="noopener noreferrer" >
					<Link to = "/"> ABOUT </Link>
				</h4 >
			</Menu.Item>
			<Menu.Item style={ numStyle }>
				
				{/* <h4 target="_blank" rel="noopener noreferrer" >
					<Link to = "#contact" > Activity </Link>
				</h4 > */}
				<a href="#Activity" data-after="Activity">Activity</a>
			</Menu.Item>
		</Menu>
	);
	const menu_member = (
		<Menu>
			<Menu.Item style={ numStyle }>
				<h4  target="_blank" rel="noopener noreferrer" >
					<Link to="/CURRENT MEMBERS">CURRENT MEMBERS</Link>
				</h4 >
			</Menu.Item>
			<Menu.Item style={ numStyle }>
				<h4 target="_blank" rel="noopener noreferrer" >
					<Link to="/Advisor">ADVISOR</Link>
				</h4>
			</Menu.Item>
			<Menu.Item style={ numStyle }>
				<h4  target="_blank" rel="noopener noreferrer" >
				<Link to="/Alumn">ALUMNI</Link>
				</h4 >
			</Menu.Item>
		</Menu>
	);
	const menu_research = (
		<Menu>
			<Menu.Item style={ numStyle }>
				<h4  target="_blank" rel="noopener noreferrer" >
					CURRENT
				</h4 >
			</Menu.Item>
			<Menu.Item style={ numStyle }>
				<h4  target="_blank" rel="noopener noreferrer" >
					EXPERTISE
				</h4 >
			</Menu.Item>
		</Menu>
	);
	const menu_publication = (
		<Menu>
			<Menu.Item style={ numStyle }>
				<h4 target="_blank" rel="noopener noreferrer"  >
					<Link to = "/Journals"> JOURNALS </Link>
				</h4>
			</Menu.Item>
			<Menu.Item style={ numStyle }>
				<a target="_blank" rel="noopener noreferrer" >
					PATENTS
				</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<div className="App">
			<section id="header">
				<div class="header container">
					<div class="nav-bar">
						<div class="brand">
							<div id="drawing">
								<div className="circle"></div>
							</div>
							<a href="#hero">
								<h1><span>NEMO</span> National Taiwan University</h1>
							</a>

							{/* <img src="https://i.ibb.co/Vwf0DbB/Logo.jpg" border="0"/> */}
						</div>
						{/* @media only screen and */}
						<div class="nav-list"> 
							<div class="hamburger">
								<div class="bar"></div>
							</div>
							<ul>
								<li>
									<Dropdown overlay={menu_home}>
										<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
										HOME  
										{/* <DownOutlined /> */}
										</a>
									</Dropdown>
								</li>
								<li>
									<Dropdown overlay={menu_member}>
										<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
											MEMBER 
											{/* <DownOutlined /> */}
										</a>
									</Dropdown>
								</li>
								<li>
									<Dropdown overlay={menu_research}>
										<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
											RESEARCH 
											{/* <DownOutlined /> */}
										</a>
									</Dropdown>
								</li>
								<li>
									<Dropdown overlay={menu_publication}>
										<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
											PUBLICATION 
											{/* <DownOutlined /> */}
										</a>
									</Dropdown>
								</li>
								{/* <li>
									<Dropdown overlay={menu_contact}>
										<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
											CONTACT <DownOutlined />
										</a>
									</Dropdown>
								</li> */}
								{/* <li><a href="#hero" data-after="Home"><Link to="/main">Home</Link></a></li> */}
								{/* <li><a href="#services" data-after="Service">Intro</a></li> */}
								{/* <li><a href="#projects" data-after="Projects">Publication</a></li> */}
								{/* <li><a href="#about" data-after="About">Member</a></li> */}
								<li><a href="#contact" data-after="Contact">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
export default AppBar;