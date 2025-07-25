import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const TodoDetails = () => {
  const {params} = useRoute();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <View style ={{ height :"50%", width : "80%", justifyContent: 'center', alignItems: 'center' , backgroundColor: params.todo.completed ?'teal' : 'white',border:5, borderRadius: 10, padding: 20}}>
      <Text>{params.todo.title}</Text>
      <Text>{params.todo.description}</Text>
      <Text>{params.todo.completed ? 'Completed' : 'Not Completed'}</Text>
    </View>
    </View>
   
  )
}

export default TodoDetails