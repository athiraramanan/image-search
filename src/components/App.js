import React from 'react';
import SearchBar from './SearchBar'
// import axios from 'axios'
// import Validator from './Validator'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
class App extends React.Component{
		// One method for getting data
		// onSearchSubmit(term){
		// axios.get('https://api.unsplash.com/search/photos',{
		// 	params: {query: term},
		// 	headers: {
		// 		Authorization: 'Client-ID xdBP8yCBXfS3AdFWbKdv4Tja1rluUkEX0pUHD0NKyus'
		// 	}
		// }).then((response)=>{
		// 	console.log(response.data.results)
		// })
		// Second method  in second method need to add a keyword called 'async' infornt of the function
		// and the assign to a variable called response and also add a keyword called 'await'
	 	
		state = {images: []}
		onSearchSubmit = async (term) => {
			const response = await unsplash
				.get('/search/photos',{
					params: {query: term}
				});
			this.setState({images: response.data.results})
		}

	render(){
		return (
			<div className='ui container' style ={{ marginTop: '10px'}}>
			<SearchBar onSubmit={this.onSearchSubmit}/>
			Found: {this.state.images.length} images
			<ImageList images={this.state.images}/>
			{/*<Validator/>*/}
			</div>
		);
	}
}
export default App;
