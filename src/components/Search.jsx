import React,{useState} from 'react'

const Search = ({onTermSubmit}) => {
    const [term, setTerm] = useState('');
    
const onSubmit = e =>{
    e.preventDefault()
    onTermSubmit(term)
    
}

    return (
        <div className = 'ui segment'>
            <label>Search Videos</label>
            <form className = 'ui form' onSubmit = {onSubmit}>
                <input
                type= "text"
                value= {term}
                onChange = {e=>setTerm(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search
