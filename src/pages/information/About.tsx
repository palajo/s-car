import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function About() {
	return(
		<body>
			<Header />
				<Container>
					<Row>
						<h1 className="margin-bottom-30">About us</h1>
						<p>
							Компания «S-Car» является одним из лидеров на рынке запасных частей и эксплуатационных материалов для легковых автомобилей европейских, японских и корейских автопроизводителей. В настоящее время компания «S-Car» представлена в трех городах: центральный оптово-розничный склад и головной офис в Харькове и региональные оптово-розничные склады в Киеве и в Днепре. Поставка запасных частей и расходных материалов через региональные склады позволяет существенно сокращать время исполнения заказов наших иногородних клиентов.
							<br /> <br />
							Принятые в компании система выбора поставщиков и алгоритм входного контроля закупаемых товаров, позволяют нашим клиентам быть всегда уверенными в качестве покупаемых деталей и расходных материалов и, как результат, в надежности своего автомобиля.
							<br /> <br />
							Множество наименований деталей известных брендов, представленных на наших складах, позволяют удовлетворить заявки покупателей практически сразу. В случае отсутствия заявленной Вами детали на складах компании, наши менеджеры оформят индивидуальный Ваш заказ и, через согласованное с Вами время, Вы получите заказанные детали. При этом оформление индивидуального заказа никак не сказывается на стоимости заказываемых деталей.
							<br /> <br />
							Специалисты отдела транспортной логистики, по Вашему поручению доставят купленный Вами товар в любую точку Украины в кратчайшие сроки и в полной сохранности. Для этих целей компания располагает современными специализированными автомобилями, а также долгосрочными партнерскими соглашениями с такими национальными перевозчиками, как «Новая Почта», «Автолюкс», «Гюнсел» , «Ночной экспресс» и др.
							С помощью интернет-заказа Вы можете самостоятельно осуществить заказ необходимой Вам детали, что сократит время на обработку товара.
							<br /> <br />
							<b>
							Наш коллектив всегда рад помочь ВАМ!<br />
							Вы можете сами убедиться в этом!
							</b>
						</p>
					</Row>
				</Container>
			<Footer />
		</body>
	);
}

export default About;
