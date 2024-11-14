import React from 'react'
import Card from './components/Card'

function App() {

  const users = [
    {
      "profile_pic": "src/assets/profile pics/one.jpg",
      "name": "John",
      "surname": "Doe",
      "city": "New York",
      "age": 30,
      "profession": "Software Engineer",
      "gender": "Male"
    },
    {
      "profile_pic": "src/assets/profile pics/90.jpg",
      "name": "Jane",
      "surname": "Smith",
      "city": "Los Angeles",
      "age": 28,
      "profession": "Graphic Designer",
      "gender": "Female"
    },
    {
      "profile_pic": "src/assets/profile pics/73.jpg",
      "name": "Carlos",
      "surname": "Mendoza",
      "city": "Madrid",
      "age": 35,
      "profession": "Architect",
      "gender": "Male"
    },
    {
      "profile_pic": "src/assets/profile pics/65.jpg",
      "name": "Maria",
      "surname": "Garcia",
      "city": "Barcelona",
      "age": 26,
      "profession": "Journalist",
      "gender": "Female"
    },
    {
      "profile_pic": "src/assets/profile pics/40.jpg",
      "name": "Ahmed",
      "surname": "Ali",
      "city": "Cairo",
      "age": 32,
      "profession": "Doctor",
      "gender": "Male"
    },
    {
      "profile_pic": "src/assets/profile pics/71.jpg",
      "name": "Emily",
      "surname": "Johnson",
      "city": "Chicago",
      "age": 24,
      "profession": "Data Scientist",
      "gender": "Female"
    },
    {
      "profile_pic": "src/assets/profile pics/51.jpg",
      "name": "Liam",
      "surname": "Brown",
      "city": "London",
      "age": 40,
      "profession": "Chef",
      "gender": "Male"
    },
    {
      "profile_pic": "src/assets/profile pics/67.jpg",
      "name": "Sophie",
      "surname": "Williams",
      "city": "Paris",
      "age": 27,
      "profession": "Fashion Designer",
      "gender": "Female"
    },
    {
      "profile_pic": "src/assets/profile pics/64.jpg",
      "name": "Mohamed",
      "surname": "El-Sayed",
      "city": "Dubai",
      "age": 29,
      "profession": "Engineer",
      "gender": "Male"
    },
    {
      "profile_pic": "src/assets/profile pics/74.jpg",
      "name": "Olivia",
      "surname": "Taylor",
      "city": "Sydney",
      "age": 31,
      "profession": "Teacher",
      "gender": "Female"
    }
  ]
  
  return (
    <>
    <div className="p-10 grid grid-cols-4 gap-4">
      {users.map((user)=>{
        return <Card pic={user.profile_pic} name={user.name} surname={user.surname} city={user.city} age={user.age} profession={user.profession} gender={user.gender} />
      })}
    </div>
    </>
  )
}

export default App