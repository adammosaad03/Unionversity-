import courses from './courses'
import studyGroups from './studyGroups'

type Course = {
id: number;
studyGroupId: number;
title: string;
keywords: string[];
eventType: string
}
type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string
  
}
type SearchEventOptions = {
  query: number | string;
  eventType: string
}

function searchEvents(options: SearchEventOptions){
    const events:(Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
    return events.filter((event: Course | StudyGroup) => {
      if(typeof options.query === 'number'){
        return options.query === event.id
      }else if(typeof options.query === 'string'){
        return event.keywords.includes(options.query)
      }
      return false
    });
}
let enrolledEvents: (Course | StudyGroup)[] = [];
function enroll(event: Course | StudyGroup){
  
enrolledEvents.push(event)
}
function drop(event: Course | StudyGroup){
  
enrolledEvents.pop()
}
const searchResults = searchEvents({query:'art', eventType:'2'})

enroll(searchResults[0])
  console.log(enrolledEvents)

  drop(searchResults[0])
  console.log(enrolledEvents)
