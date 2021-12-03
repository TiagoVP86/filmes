import React from 'react';
import { Container, Banner, Title, RateContainer, Rate } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchItem({data, navigatePage}) {
  function detailMovie(){
    if(data.release_date === ''){
      alert('Filme sem data de lançamento.');
      return;
    }
    navigatePage(data);
  }

  return (
    <Container activeOpacity={0.7} onPress={detailMovie} >
        {data?.poster_path ? (
          <Banner 
            resizeMethod="resize"
            source={{uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
          />
          ): (
          <Banner 
            resizeMethod="resize"
            source={require('../../assets/semfoto.png')}
          />
        )}

        <Title> { data?.title } </Title> 
      
        <RateContainer>
            <Icon name="md-star" size={12} color="#E7A74E" />
            <Rate>{data?.vote_average}/10</Rate>
        </RateContainer>

    </Container>
  );
}