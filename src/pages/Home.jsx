import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import styles from "./Home.module.scss";

import { informationCircleOutline } from "ionicons/icons";

const Home = () => {

	const [ show, hide ] = useIonActionSheet();

	return (
		<IonPage>
			<IonContent fullscreen>
				<IonGrid>
					<IonRow>
						<IonCol size="12" className="ion-text-center">
							<img src="/assets/main.png" alt="title" className={ styles.title } />
						</IonCol>
					</IonRow>
				</IonGrid>

				<IonRow className={ styles.buttons }>
					<IonCol size="12">
						<IonButton routerLink="/quiz" color="light" expand="block" className={ styles.playButton }>Start Playing</IonButton>

						<IonButton color="dark" className={ styles.helpButton } onClick={() => show({
							buttons: [{ text: 'Close' }],
							header: 'Como usar',
							subHeader: 'Escolha uma categoria e a dificuldade, então prossiga para responder cada pergunta. Você ganhará uma pontuação ao acertar uma resposta e também será indicado se sua resposta estava correta ou incorreta.'
						}) }>
							<IonIcon icon={ informationCircleOutline } /> How to play
						</IonButton>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Home;
