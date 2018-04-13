import React, { Component } from 'react'
import MenuItem, { Tab, Menu, Grid, Segment, Icon, Dropdown, Image } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const Navigation = () => (
	<Grid>
		<Grid.Row centered>
			<div className="TabButtons">
				<Menu attached='top' size="massive" name="Options">
					<Menu.Item as={Nav} to="/" name="Overview"> <Icon name='area graph' />
						Live Charts
					</Menu.Item>

					<Menu.Item as={Nav} to="/download" name="Download Dataset"> <Icon name='download' />
						Download
					</Menu.Item>

					<Menu.Item as={Nav} to="/threshold" name="Nodes"> <Icon name='edit' />
						Set Node Threshold
					</Menu.Item>

					<Menu.Item as={Nav} to="/start" name="Start"> <Icon name='id card icon' />
						Set Lab Information
					</Menu.Item>
				</Menu>
			</div>
		</Grid.Row>
	</Grid>
);

export default Navigation