export default { fetchCard }

const key = '21141418-363b708104a3c8ce92a316b99';
const PER_PAGE = 12;
const searchQuery = '';
const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`;


function fetchCard(searchQuery, pageNumber){
    return fetch(`${baseUrl}&q=${searchQuery}&page=${pageNumber}&per_page=${PER_PAGE}&key=${key}`)
    .then(response=>response.json())
}

