import React from 'react';
import { ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { Heading, Text, Container, VStack } from '@chakra-ui/react';
const SecurityPolicyPage = () => {
  return (
    <Stack
      spacing={20}
      py={{ base: 8, lg: 10 }}
      px={{ base: 8, sm: 16, md: 28, lg: 16, xl: 20, '2xl': 40 }}
      mt={{ base: 24, lg: 40 }}
      justify={'start'}
      flex={1}
      w={'full'}>
      <Container maxW={'full'} w={'full'}>
        <Heading as="h1">Политика за сигурност</Heading>

        <VStack paddingTop="40px" spacing="4" align="start" textAlign={'start'}>
          <Text as="p" fontSize="lg">
            В MyClassroom безопасността и сигурността на учащите е наш основен приоритет.
          </Text>
          <Text as="p" fontSize="lg">
            Екипът на MyClassroom насърчаваме всички потребители на платформата да допринесът за една безопасна и
            положителна среда на онлайн обучение като се придържат към тази политика за сигурност.
          </Text>

          <VStack spacing={2} align={'start'}>
            <Text as="p" fontSize="lg">
              1. Като родител от MyClassroom Ви молим:
            </Text>
            <UnorderedList>
              <ListItem>
                Помогнете на вашия ученик да практикува положително и възпитано поведение в онлайн класната стая преди
                началото на часа. Това включва да им помогнем да разберат основните функции на Zoom, което ще им позволи
                да навлезнат по – лесно в предстоящия им урок, без да разсейват другите учащи.
              </ListItem>
              <ListItem>
                Преди вашият ученик да посети първия час, уверете се, че той ще бъде любезен с другите обучаеми, както и
                с учителя.
              </ListItem>
              <ListItem>
                Искаме MyClassroom да продължи да бъде автентично и безопасно място. Поради това, когато публикувате
                отзиви, трябва да публикувате само свои собствени снимки и видеоклипове и да спазвате закона, моля, не
                изпращайте спам и не публикувайте голота.
              </ListItem>
              <ListItem>
                Наблюдавайте учениците си, докато посещават час, докато не се уверите, че могат да участват безопасно и
                с нужното уважение сами. Насърчаваме родителите да стоят извън екрана колкото е възможно повече, така че
                ако вашият обучаем се нуждае от практическа помощ или надзор по време на часа, моля, свържете се с на
                учителя преди час, за да го уведомите.
              </ListItem>
              <ListItem>
                Уверете се, че вашият обучаем в началото на часа е с активирано видео, за да позволи на учителя да
                потвърди самоличността на ученика. Тази проверка може да бъде направена в началото на всяка среща на
                класа и е необходимо за безопасността в класната стая.
              </ListItem>
              <ListItem>
                Пазете личната си информация, не я споделяйте и никога не искайте от други учащи тяхната.
              </ListItem>
              <ListItem>
                Вие носите отговорност за поддържането на поверителността на обучаемите онлайн. Като общо правило не
                трябва да разкривате или насърчавате обучаемите да разкриват каквато и да е лична информация за тях
                самите или семейството на обучаемия. Личната информация може да включва, но не само, пълното име на
                обучаемия, дата на раждане, личен имейл адрес, адрес или телефонен номер. Да поискате от учащите да
                споделят местоположението си на ниво държава или град е приемливо, при условие че давате на учащите
                опция да не споделят, ако предпочитат да не го правят.
              </ListItem>
            </UnorderedList>
          </VStack>

          <VStack spacing={2} align={'start'}>
            <Text as="p" fontSize="lg">
              2. Изисквания за общия ред в класната стая
            </Text>
            <UnorderedList>
              <ListItem>От учителите се изисква да включват камерите си, докато преподават онлайн.</ListItem>
              <ListItem>
                Учителите трябва да присъстват в онлайн класната стая и да наблюдават класа си през цялото време. Трябва
                да са на компютъра си през цялото време, докато предподават урока си.
              </ListItem>
              <ListItem>
                Преди да водите своите уроци, моля, запознайте се с Zoom и платформата на MyClassroom.
              </ListItem>
              <ListItem>
                Учителите трябва да водят урока си и да реагират бързо, ако възникнат проблеми с безопасността или
                поведението на учащите в класната стая.
              </ListItem>
              <ListItem>
                Уверете се, че всички обучаеми са включили своята камера или ако не са, че сте направили проверка в
                началото на всеки час, за да потвърдите самоличността им. Насърчаваме учащите да активират своето
                аудио/камера по време на останалата част от часа, за да създадат по-социално изживяване за всички учащи,
                но това не е задължително (някои учащи се чувстват по-сигурни с изключено видео). Ако определен ученик
                отказва да се идентифицира пред камера и той не може или не желае да я активира, моля: (1) обяснете
                внимателно нашата политика по отношение на проверката, (2) уведомете ги, че ще подадете сигнал към екипа
                на MyClassroom и ще бъдат премахнати от часа.
              </ListItem>
              <ListItem>
                Родителите могат да слушат часа на разумно разстояние от своя ученик (така че да не са пред камерата)
                или да гледат записа по-късно, но е против правилата на MyClassroom родител да слуша или гледа час от
                отделно устройство.
              </ListItem>
              <ListItem>
                Ако възникне инцидент, свързан с безопасността по време на някой от вашите класове, незабавно се
                свържете с отдела за обслужване на клиенти.
              </ListItem>
              <ListItem>
                Искаме MyClassroom да продължи да бъде автентично и безопасно място. Уважавайте всички в MyClassroom и
                моля, не изпращайте спам и не публикувайте голота.
              </ListItem>
            </UnorderedList>
          </VStack>

          <VStack spacing={4} align={'start'}>
            <Text as="p" fontSize="lg">
              3. Правилник на платформата
            </Text>

            <Text as="p" fontSize="lg">
              MyClassroom е отворена общност за учащи, родители и учители. Всички частни уроци и курсове на платформата
              се предлагат от независими преподаватели, които сами определят съдържанието и формата на своите часове.
              Когато използвате MyClassroom, вие се присъединявате към общност от хора от цяла България. За нас е важно
              MyClassroom да е безопасно място за нашите потребители. Кодексите по-долу помагат MyClassroom да бъде
              безопасен, забавен и приятен за всички.
            </Text>

            <Text as="p" fontSize="lg">
              A) Кодекс за поведение на учителя
            </Text>

            <UnorderedList>
              <ListItem>Предлагайте уроци само когато имате нужния опит в сферата.</ListItem>
              <ListItem>Преподавайте класове професионално</ListItem>
              <ListItem>Бъдете подготвени, започнете навреме и се отнасяйте с уважение към всички обучаеми.</ListItem>
              <ListItem>
                Не преподавайте, докато сте под влияние на алкохол или наркотици, и не демонстрирайте каквото и да е
                поведение, което ученик на възраст 18 или по-млад е забранено да прави.
              </ListItem>
              <ListItem>Отговаряйте незабавно на родителски въпроси и молби.</ListItem>
              <ListItem>
                Общувайте с родителите и учащите по професионален начин, както в съобщения, така и в клас.
              </ListItem>
              <ListItem>
                Поддържайте всички начини на комуникация на нашата платформа; никога не предоставяйте лична информация
                на родители или учащи „извън платформата“ или на лични срещи (забранено, освен ако събитието не е
                спонсорирано от MyClassroom).
              </ListItem>
              <ListItem>
                Създайте безопасно и приветливо пространство за учащи и семейства от всякакъв произход, вярвания и
                местоположения.
              </ListItem>
            </UnorderedList>

            <Text as="p" fontSize="lg">
              B) Кодекс за поведение на обучаемия
            </Text>

            <UnorderedList>
              <ListItem>
                Бъдете мили: Помогнете на всички ученици в часа да се почувстват добре и част от него.
              </ListItem>
              <ListItem>
                Гледайте за безопасността си: Пазете личната си информация в поверителност и никога не питайте други
                учащи за тяхната (напр. имейл адрес, пощенски адрес, телефонен номер и т.н.).
              </ListItem>
              <ListItem>Бъдете уважителни: отнасяйте се с другите така, както искате да се отнасят те с вас.</ListItem>
            </UnorderedList>

            <Text as="p" fontSize="lg">
              C) Общоучилищен кодекс за поведение
            </Text>

            <UnorderedList>
              <ListItem>
                Ние приветстваме членове от всякакъв произход, вярвания и местоположения и се ангажираме да създадем
                безопасно пространство за нашите потребители във всички стълбове на многообразието на платформата ни.
              </ListItem>
              <ListItem>
                Ще се вслушваме в обратната връзка от родители, учители и учащи и ще направим съответните промени.
              </ListItem>
              <ListItem>
                Ще създадем и наложим политики за създаване на висококачествена, надеждна и безопасна общност за учене.
              </ListItem>
              <ListItem>Ще отговаряме своевременно на възникнали въпроси и проблеми.</ListItem>
            </UnorderedList>

            <Text as="p" fontSize="lg">
              Моля, приемете тези правила на сериозно. Ако вашето поведение вреди на нашите потребители, общност или
              служители, екипът на MyClassroom ще предприеме незабавно действие против нарушителите на реда в
              платформата. Членовете на MyClassroom, които не спазват правилата за ползване на платформата и не се
              придържат към указаните кодекси за поведение, ще бъдат премахнати незабавно от сайта.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Stack>
  );
};

export default SecurityPolicyPage;