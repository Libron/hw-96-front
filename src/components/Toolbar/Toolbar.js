import React, {Fragment} from 'react';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle, FormGroup,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

import {NavLink as RouterNavLink} from 'react-router-dom';
import AvatarThumbnail from "../AvatarThumbnail/AvatarThumbnail";
import FacebookLogin from "../FacebookLogin/FacebookLogin";

const Toolbar = ({user, logout}) => {
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={RouterNavLink} to="/">Mayami Бич</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        {user ? (
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Hello, <span><AvatarThumbnail fb={user.facebookId} image={user.avatarImage}/> {user.displayName}</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink tag={RouterNavLink} to='/cocktails/create' style={{color:'black'}} >
                                            Create new cocktail
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink tag={RouterNavLink} to='/cocktails/mylist' style={{color:'black'}} >
                                            My cocktails
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem onClick={logout}>
                                        <NavLink style={{color:'black'}}>
                                            Logout
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        ) : (
                            <Fragment>
                                <FacebookLogin />
                            </Fragment>
                        )}
                    </Nav>
            </Navbar>
        </div>
    );
};

export default Toolbar;