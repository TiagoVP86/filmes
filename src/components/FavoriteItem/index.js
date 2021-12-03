import React from 'react';
import {Container, Title, RateContainer, Rate, ActionContainer, DetailButton, DeleteButton} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export default function FavoriteItem({data, deleteMovie, navigatePage}) {
 return (
   <Container>
       <Title size={22} >{data.title}</Title>

       <RateContainer>
            <Icon name="md-star" size={12} color="#E7A74E" />
            <Rate>{data.vote_average}/10</Rate>
       </RateContainer>

       <ActionContainer>
           <DetailButton onPress={() => navigatePage(data)} >
               <Title size={14} >Ver Detalhes</Title>
           </DetailButton>

           <DeleteButton onPress={() => deleteMovie(data.id)} >
               <Icon name="md-trash-outline" size={24} color="#FFF" />
           </DeleteButton>

       </ActionContainer>
   </Container>
  );
}