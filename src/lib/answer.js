import firestore from '@react-native-firebase/firestore';

export const interactionCollection = firestore().collection('family').doc('family1').collection('interaction');


/** 
    CREATE: 답변 생성을 위한 firestore API
    * check 답변한 사용자의 isAnswered값을 true로 갱신
    * firestore 배열 api를 사용해 갱신
    @params {object} user: 현재 로그인한 사용자 정보
    @params {object} isAnswered: 답변 여부 정보
    @params {object} answer: 답변 내용
    @params {questionDocId} answer: 질문 고유 식별 번호
*/
export function createAnswer({user, isAnswered, answer, questionDocId}) {
    const check = isAnswered.map(item => item.info === user.info ? {...item, isAnswered:true} : item);

    return interactionCollection.doc(questionDocId).set({
        answer : firestore.FieldValue.arrayUnion({
            id: user.id,
            info: user.info,
            answer: answer,
            createdAt: firestore.Timestamp.now()
        }),
        check
    },{merge:true})
}

export async function getAnswer(){
    
}

/** 
    READ: 답변 여부 조회를 위한 firestore API
    * 특정 질문에 대해 어떤 가족 구성원이 답변을 했는지 확인할 수 있음
    @params {object} questionDocId: 답변한 질문 고유 식별 번호
    @return 답변 여부가 저장된 배열
*/
export async function getIsAnswered({questionDocId}) {
    const snapshot = await interactionCollection.doc(questionDocId).get()
    return snapshot.data().check;
}
