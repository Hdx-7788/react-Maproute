import { Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

const Maprouter = ({ route }) => (

    <Switch>
        {route.map(item => item.path ? (
            item.children ? (
                <Route path={item.path} key={item.path} render={(props) =>
                    <item.component {...props}>
                        <Maprouter route={item.children}></Maprouter>
                    </item.component>
                } ></Route>
            ) : (
                    <Route path={item.path} key={item.path} render={(props) =>
                        <item.component {...props}></item.component>
                    }></Route>
                )
        ) : (
                <Redirect key={item.from} {...item}></Redirect>
            ))}
    </Switch>
)
export default Maprouter    