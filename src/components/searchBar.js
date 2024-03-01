import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
export default function SearchBar(){
    const [search, setSearch] = useState('');
    <TextInput
        editable
        onSubmitEditing = {searchSpotify(search)}
    ></TextInput>
}
const styles = StyleSheet.create({});
function searchSpotify(query){

}
