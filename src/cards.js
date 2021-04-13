import galleryTamplate from './templates/gallery.hbs';
import api from './apiService.js';
import 'material-design-icons/iconfont/material-icons.css';

const form = document.querySelector('.search-form');
const btn = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('input')
let pageNumber = 1;

form.addEventListener('submit', formSubmit);
btn.addEventListener('click', moreGallery);

function formSubmit(e){
e.preventDefault();
const searchQuery = e.currentTarget.elements.query.value 
clearGallery()
if(searchQuery!== ''){
api.fetchCard(searchQuery) 
.then(markupMoreList);   
}
}
    
function clearGallery(){
  const galleryClear = gallery.innerHTML = '';   
}

function moreGallery() {
    const searchQuery = inputValue();
    pageNumber++;
    api.fetchCard(searchQuery, pageNumber)
    .then(markupMoreList)
}

function inputValue() {
    return input.value;
}

function markupMoreList(data) {
    const moreList = gallery.insertAdjacentHTML('beforeend', galleryTamplate(data));
    setTimeout(() => {
            scroll()
        },500)
}

function scroll() {
    
    let position = btn.offsetTop;
    window.scrollTo(0, position)
    console.log(position);
}