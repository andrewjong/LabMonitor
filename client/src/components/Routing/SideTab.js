import React, { Component } from 'react'
import MenuItem, { Tab, Menu, Grid, Segment, Icon, Dropdown, Image } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import './SideTab.css';

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const SideTab = () => (
	<div className="TabButtons">
		<Menu attached='top' size="massive" name="Options">
			<Dropdown item icon='icon th list' simple>
				<Dropdown.Menu>

					<Dropdown.Item as={Nav} to="/" name="Overview"> <Icon name='home' />
						Overview
					</Dropdown.Item>

					<Dropdown.Item as={Nav} to="/download" name="Download Dataset"> <Icon name='download' />
						Download Dataset
					</Dropdown.Item>

					<Dropdown.Item as={Nav} to="/threshold" name="Nodes"> <Icon name='edit' />
						Set Node Threshold
					</Dropdown.Item>

					<Dropdown.Item as={Nav} to="/start" name="Start"> <Icon name='id card icon' />
						Set Lab Information
					</Dropdown.Item>

				</Dropdown.Menu>
			</Dropdown>
		</Menu>
	</div>	
);

export default SideTab