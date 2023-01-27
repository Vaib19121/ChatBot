import React, {useCallback, useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import {GiftedChat, Bubble, InputToolbar} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const {Model, Temperature, darkMode} = useSelector(store => store.config);
  console.log(Model, Temperature, darkMode);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chat Gpt',
          avatar: require('../assets/icon/gpt.jpeg'),
        },
      },
    ]);
  }, []);
  console.log(messages);
  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: darkMode ? '#252d3b' : '#e6e6e6',
          },
          left: {
            backgroundColor: darkMode ? '#252d3b' : '#e6e6e6',
          },
        }}
        textStyle={{
          left: {
            color: darkMode ? '#fff' : '#000',
          },
          right: {
            color: darkMode ? '#fff' : '#000',
          },
        }}
      />
    );
  }
  const sendResponseToAi = async (text,Model,Temperature) => {
    setLoading(true);
    const response = await fetch('https://chatbot-server-o3pe.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: text,
        model: Model,
        temperature: Temperature,
      }),
    });
    const data = await response.json();
    console.log('resp-->', data);
    setLoading(false);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, {
        _id: Math.round(Math.random() * 1000000),
        text: data.message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chat Gpt',
          avatar: require('../assets/icon/gpt.jpeg'),
        },
      }),
    );
  };

  const onSend = useCallback((messages = []) => {
    console.log('messages-->', messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    sendResponseToAi(messages[0].text,Model,Temperature);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: darkMode ? '#303a48' : '#fff'}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        isTyping={loading}
        scrollToBottom={true}
        scrollToBottomComponent={() => (
          <Image
            source={
              darkMode
                ? require('../assets/icon/chevron_down_white.png')
                : require('../assets/icon/chevron_down.png')
            }
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        )}
        renderBubble={renderBubble}
        renderInputToolbar={props => {
          return (
            <InputToolbar
              {...props}
              containerStyle={{backgroundColor: darkMode ? '#303a48' : '#fff'}}
              textInputStyle={{color: darkMode ? '#fff' : 'black'}}
            />
          );
        }}
      />
    </View>
  );
}
