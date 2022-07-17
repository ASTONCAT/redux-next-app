import redux, { createStore } from "redux"
import { createWrapper } from "next-redux-wrapper"

import { createStore, applyMiddleware, combineReducers } from 'redux'

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { reducer, State } from "./reducer";