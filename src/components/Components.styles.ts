import styled from 'styled-components';
import { FC } from 'react';

interface IconProps {
    backgroundImage:  string
};

export const Heading = styled.div`
    font-size: 4rem;
    margin-bottom: 2rem;
`

export const Container = styled.div`
    margin: 2% 10%;
    border: 5px dashed #666;
    border-radius: 3rem;
    text-align: center;
`
export const SmContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ddd;
    border: 1px solid #000;
    border-radius: 1rem;
    padding: 1.5rem 1rem;
    margin: 1rem 5%;
    text-align: left;
`

export const Input = styled.input`
    background-color: #dee7fa;
    border: none;
    border-bottom: 2px dotted #666;
    padding: 0.3rem 0.5rem;
    margin-right: 2rem;
    font-size: 0.8rem;
`

export const Button = styled.button`
    padding: 0.5rem 0.8rem;
    border-radius: 1rem;
    background-color: #145573;
    color: #fff;
    border: 2px solid black;
    font-size: 1rem;
    margin-bottom: 2rem;
`

export const Location = styled.div`
    font-size: 1.2rem;
`

export const PresentTime = styled.div`
    font-size: 0.8rem;
    color: gray
`

export const TempDiv = styled.div`
    text-align: center;
`
export const Temperature = styled.span`
    font-size: 4rem;
    font-weight: 800;
    margin-right: 1rem;
`

export const Weather = styled.span`
    font-size: 1rem;
    font-weight: 600;
`

export const Image = styled.div<{ backgroundImage : string}>`
    height: 4rem;
    width: 4rem;
    display: inline-block;
    position: absolute;
    background-image: url(${(props)=>props.backgroundImage});
    background-size: contain;
`

export const InfoDiv = styled.div`
    border-bottom: 4px dashed #888;
    display: inline-block;
    width: 35%;
    margin: 1rem 5%;
    padding: 0.2rem 1rem 1.5rem;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
`
export const InfoLeft = styled.div`
    display: inline-block;
    width: 50%;
    text-align: left;
    font-weight: 700;
`
export const InfoRight = styled.div`
    display: inline-block;
    width: 50%;
    text-align: right;
`