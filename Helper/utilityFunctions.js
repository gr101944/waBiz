
   var questionsJSON = require('./../questions2.json');
   var questions = questionsJSON.questionsWithOptions;

   function getValues(array, searchQuery){

    for(var z=0;z<array.length;z++){
        if(array[z].indexOf(searchQuery) !== -1){
          console.log ("Found")
          return (array[z])
  
        }
      }
    }
  
    function pushAnswersInArray(array, searchQuery, mergePayLoad){
  
    for(var z=0;z<array.length;z++){
    
        if(array[z][0].chatId === searchQuery){
            console.log (array[z][0])
            array[z][0] = {...array[z][0], ...mergePayLoad}
        }
      }
    }

    function findContactInATS(array, searchItem){
        searchItem = searchItem.substring(0,12)
        for(var i = 0; i < array.length; i++)
        {
          if(array[i].psCandidateMobile === searchItem)
          {
            console.log ("Found")
            return array[i].psJobPosition
          }
        }
        return "Not Found"      
    }
  
    function getQuestOptionsArrForQuestNo (questNum){

      for (var i = 0; i < questions.length; i++){
          var quest = (questions[i])
          if (i=== questNum){         
              return [quest[0].question, quest[1].options]
          }
      }
    }

    function pushAnswers(array, searchQuery, item){

    for(var z=0;z<array.length;z++){
        if(array[z].indexOf(searchQuery) !== -1){
            console.log ("Found")
            array[z].push(item)
            break;
        }
      }
    }

    function getValuesForCase(array, searchQuery){

    for(var z=0;z<array.length;z++){
    
        if(array[z][0].chatId === searchQuery){
            return (array[z][0])
                       
        }
      }
    }

    async function sendImage(chatId, url, caption, MessageMedia){
        console.log("in sendImage")
        
        const media = await MessageMedia.fromUrl(url);
        media.mimetype = "image/png";
        media.filename = "CustomImageName.png";
        client.sendMessage(chatId, media, {caption: caption})
    
    }
    module.exports = {getValues, pushAnswersInArray, findContactInATS, getQuestOptionsArrForQuestNo, pushAnswers, getValuesForCase, sendImage}