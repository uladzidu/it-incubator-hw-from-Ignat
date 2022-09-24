import React from 'react'
import axios from "axios";

export const instance = axios.create({
    baseURL : 'https://neko-cafe-back.herokuapp.com/auth/test'
})
