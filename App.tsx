import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [screen, setScreen] = useState('login');

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Барлығы');
  const [selectedBook, setSelectedBook] = useState(null);

  // Жаңа кітаптар тізімі (Технология, Бизнес, Психология және Өздік даму)
  const [books] = useState([
    { 
      id: '1', 
      title: 'Чистый код (Clean Code)', 
      author: 'Роберт Мартин', 
      category: 'Технология', 
      icon: '💻', 
      status: 'Қолжетімді', 
      desc: 'Бағдарламалаушыларға арналған кодты таза әрі сапалы жазудың ережелері мен тәжірибесі.',
      content: 'Кіріспе. Таза кодтың маңызы...\n\nНашар код жүйені бұзуы мүмкін. Әрбір бағдарламашы кодты тек жұмыс істейтін етіп қана емес, сонымен қатар оқылуға ыңғайлы етіп жазуы тиіс...'
    },
    { 
      id: '2', 
      title: 'Атомные привычки', 
      author: 'Джеймс Клир', 
      category: 'Психология', 
      icon: '🎯', 
      status: 'Оқылуда', 
      desc: 'Керемет нәтижелерге қол жеткізуге көмектесетін шағын әдеттер мен өзгерістер туралы бестселлер.',
      content: '1-тарау. Атомдық әдеттердің күші...\n\nКішкене өзгерістер уақыт өте келе үמin нәтижелерге әкеледі. Егер сіз күн сайын 1%-ға жақсарсаңыз, бір жылдан кейін 37 есе жақсы боласыз...'
    },
    { 
      id: '3', 
      title: 'Богатый папа, бедный папа', 
      author: 'Роберт Кийосаки', 
      category: 'Бизнес', 
      icon: '📈', 
      status: 'Қолжетімді', 
      desc: 'Қаржылық сауаттылық, ақшаны басқару және табысты инвестиция жасау туралы кітап.',
      content: 'Бөлім 1. Байлар ақша үшін жұмыс істемейді...\n\nМектептер ақша табуды үйретпейді, олар жалдамалы жұмысшы болуды ғана үйретеді. Нағыз байлық активтерді жинаудан басталады...'
    },
    { 
      id: '4', 
      title: 'Sapiens: Адамзаттың қысқаша тарихы', 
      author: 'Юваль Ной Харари', 
      category: 'Тарих', 
      icon: '🌍', 
      status: 'Қолжетімді', 
      desc: 'Тас дәуірінен бастап бүгінгі күнге дейінгі адамзат баласының эвалюциясы мен даму жолы.',
      content: 'I бөлім. Когнитивті төңкеріс...\n\nШамамен 70 000 жыл бұрын Homo sapiens санасы түбегейлі өзгере бастады. Тілдің дамуы мен қиял күші адамдарға топ болып бірігуге мүмкіндік берді...'
    },
    { 
      id: '5', 
      title: 'Стив Джобс', 
      author: 'Уолтер Айзексон', 
      category: 'Биография', 
      icon: '🍏', 
      status: 'Қолжетімді', 
      desc: 'Apple компандысының негізін қалаушы Стив Джobстың өмір жолы мен инновациялық көзқарасы.',
      content: '1-тарау. Балалық шақ...\n\nСтив Джобс әлемді өзгертуді мақсат еткен тұлға еді. Оның дизайынға деген талабы мен мінсіздікке ұмтылысы бүкіл технология әлемін басқа арнаға бұрды...'
    },
    { 
      id: '6', 
      title: 'Магия утра', 
      author: 'Хэл Элрод', 
      category: 'Мотивация', 
      icon: '🌅', 
      status: 'Қолжетімді', 
      desc: 'Таңертең ерте тұрып, өміріңізді түбегейлі өзгертуге көмектесетін өнімділік жүйесі.',
      content: 'Таңғы сағаттардың құпиясы...\n\nКүніңіз қалай басталады, өміріңіз де солай өтеді. Керемет таңғы әдеттер мен сәттер сіздің табысыңыздың кілті...'
    },
  ]);

  const [myBooksList, setMyBooksList] = useState([
    { id: '1', title: 'Чистый код (Clean Code)', author: 'Роберт Мартин', icon: '💻', content: 'Кіріспе. Таза кодтың маңызы...' }
  ]);

  const handleBack = () => {
    if (screen === 'register' || screen === 'catalog') {
      setScreen('login');
    } else if (screen === 'detail') {
      setScreen('catalog');
    } else if (screen === 'reader') {
      setScreen('detail');
    } else if (screen === 'mybooks' || screen === 'profile') {
      setScreen('catalog');
    }
  };

  const categories = ['Барлығы', 'Технология', 'Психология', 'Бизнес', 'Тарих', 'Биография', 'Мотивация'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      {/* 1. КІРУ БЕТІ (LOGIN) */}
      {screen === 'login' && (
        <View style={styles.container}>
          <Text style={styles.title}>Қош келдіңіз!</Text>
          <Text style={styles.subtitle}>Онлайн кітапханаға кіру үшін деректеріңізді енгізіңіз.</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIconText}>📞</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Телефон нөмірі"
              placeholderTextColor="#AAA9B2"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIconText}>🔒</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Құпия сөз"
              placeholderTextColor="#AAA9B2"
              secureTextEntry
            />
          </View>

          <Pressable style={styles.loginBtn} onPress={() => setScreen('catalog')}>
            <Text style={styles.loginBtnText}>Кіру</Text>
          </Pressable>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Аккаунтыңыз жоқ па? </Text>
            <Pressable onPress={() => setScreen('register')}>
              <Text style={styles.footerLink}>Тіркелу</Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* 2. ТІРКЕЛУ БЕТІ (REGISTER) */}
      {screen === 'register' && (
        <View style={styles.container}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Тіркелу</Text>
          <Text style={styles.subtitle}>Кітаптарды оқу үшін жаңа аккаунт құрыңыз!</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIconText}>👤</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Аты-жөніңіз"
              placeholderTextColor="#AAA9B2"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIconText}>📞</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Телефон нөмірі"
              placeholderTextColor="#AAA9B2"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIconText}>🔒</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Құпия сөз"
              placeholderTextColor="#AAA9B2"
              secureTextEntry
            />
          </View>

          <Pressable style={styles.loginBtn} onPress={() => setScreen('catalog')}>
            <Text style={styles.loginBtnText}>Тіркелуді аяқтау</Text>
          </Pressable>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Аккаунтыңыз бар ма? </Text>
            <Pressable onPress={() => setScreen('login')}>
              <Text style={styles.footerLink}>Кіру</Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* 3. КІТАПТАР КАТАЛОГЫ (CATALOG) */}
      {screen === 'catalog' && (
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.title}>Кітаптар каталогы</Text>
              <Text style={styles.subtitle}>Қалаған кітабыңызды таңдап оқыңыз</Text>
            </View>
            <Pressable onPress={() => setScreen('profile')} style={styles.profileIconBox}>
              <Text style={{ fontSize: 18 }}>👤</Text>
            </Pressable>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIconText}>🔍</Text>
            <TextInput
              style={styles.input}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Кітап немесе автор іздеу..."
              placeholderTextColor="#AAA9B2"
            />
          </View>

          <View style={styles.navTabs}>
            <Pressable style={[styles.tabBtn, styles.activeTab]}>
              <Text style={styles.activeTabText}>Барлығы</Text>
            </Pressable>
            <Pressable style={styles.tabBtn} onPress={() => setScreen('mybooks')}>
              <Text style={styles.tabText}>Менің кітаптарым ({myBooksList.length})</Text>
            </Pressable>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {categories.map((cat, index) => (
              <Pressable 
                key={index} 
                style={[styles.categoryChip, selectedCategory === cat && styles.categoryChipActive]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text style={[styles.categoryChipText, selectedCategory === cat && styles.categoryChipTextActive]}>
                  {cat}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {books
              .filter(b => {
                const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesCategory = selectedCategory === 'Барлығы' || b.category === selectedCategory;
                return matchesSearch && matchesCategory;
              })
              .map((item) => (
                <Pressable
                  key={item.id}
                  style={styles.bookCard}
                  onPress={() => {
                    setSelectedBook(item);
                    setScreen('detail');
                  }}
                >
                  <Text style={styles.bookIcon}>{item.icon}</Text>
                  <View style={{ flex: 1, marginLeft: 14 }}>
                    <Text style={styles.bookTitle}>{item.title}</Text>
                    <Text style={styles.bookAuthor}>{item.author}</Text>
                    <Text style={styles.bookCategory}>{item.category}</Text>
                  </View>
                  <Text style={[styles.bookStatus, item.status === 'Қолжетімді' ? styles.statusGreen : styles.statusOrange]}>
                    {item.status}
                  </Text>
                </Pressable>
              ))}
          </ScrollView>
        </View>
      )}

      {/* 4. КІТАП ТУРАЛЫ АҚПАРАТ (DETAIL) */}
      {screen === 'detail' && selectedBook && (
        <View style={styles.container}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <View style={styles.detailHeader}>
            <Text style={styles.detailIcon}>{selectedBook.icon}</Text>
            <Text style={styles.title}>{selectedBook.title}</Text>
            <Text style={styles.subtitle}>{selectedBook.author} • {selectedBook.category}</Text>
          </View>

          <View style={styles.descBox}>
            <Text style={styles.descTitle}>Кітап туралы:</Text>
            <Text style={styles.descText}>{selectedBook.desc}</Text>
          </View>

          <Pressable 
            style={[styles.loginBtn, { marginTop: 'auto', marginBottom: 30 }]} 
            onPress={() => {
              if (!myBooksList.some(b => b.id === selectedBook.id)) {
                setMyBooksList([...myBooksList, selectedBook]);
              }
              setScreen('reader');
            }}
          >
            <Text style={styles.loginBtnText}>Кітапты оқу 📖</Text>
          </Pressable>
        </View>
      )}

      {/* 5. КІТАПТЫ ОҚУ ЭКРАНЫ (READER) */}
      {screen === 'reader' && selectedBook && (
        <View style={styles.container}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>{selectedBook.title}</Text>
          <Text style={styles.subtitle}>{selectedBook.author}</Text>

          <ScrollView style={styles.readerBox} showsVerticalScrollIndicator={false}>
            <Text style={styles.readerText}>{selectedBook.content}</Text>
          </ScrollView>
        </View>
      )}

      {/* 6. МЕНІҢ КІТАПТАРЫМ (MY BOOKS) */}
      {screen === 'mybooks' && (
        <View style={styles.container}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Менің кітаптарым</Text>
          <Text style={styles.subtitle}>Сіз сақтап қойған кітаптар тізімі</Text>

          <ScrollView style={{ flex: 1, marginTop: 10 }} showsVerticalScrollIndicator={false}>
            {myBooksList.length === 0 ? (
              <Text style={{ textAlign: 'center', color: '#AAA9B2', marginTop: 40, fontSize: 16 }}>
                Әзірге сақталған кітаптар жоқ 📚
              </Text>
            ) : (
              myBooksList.map((item) => (
                <View key={item.id} style={styles.bookCard}>
                  <Pressable 
                    style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}
                    onPress={() => {
                      setSelectedBook(item);
                      setScreen('reader');
                    }}
                  >
                    <Text style={styles.bookIcon}>{item.icon}</Text>
                    <View style={{ flex: 1, marginLeft: 14 }}>
                      <Text style={styles.bookTitle}>{item.title}</Text>
                      <Text style={styles.bookAuthor}>{item.author}</Text>
                    </View>
                  </Pressable>

                  <Pressable 
                    onPress={() => {
                      setMyBooksList(myBooksList.filter(b => b.id !== item.id));
                    }}
                    style={{ padding: 8 }}
                  >
                    <Text style={{ fontSize: 18 }}>🗑️</Text>
                  </Pressable>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      )}

      {/* 7. ЖЕКЕ КАБИНЕТ (PROFILE) */}
      {screen === 'profile' && (
        <View style={styles.container}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Жеке кабинет</Text>
          <Text style={styles.subtitle}>Қолданушы профилі</Text>

          <View style={styles.profileCard}>
            <Text style={{ fontSize: 40, marginBottom: 10 }}>🧑‍💻</Text>
            <Text style={styles.profileName}>{name || 'Қолданушы'}</Text>
            <Text style={styles.profilePhone}>{phone || '+7 (700) 000-00-00'}</Text>
          </View>

          <Pressable 
            style={[styles.loginBtn, { backgroundColor: '#FF3B30', marginTop: 'auto', marginBottom: 30 }]} 
            onPress={() => setScreen('login')}
          >
            <Text style={styles.loginBtnText}>Шығу</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },
  title: {
    color: '#1B1923',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },
  subtitle: {
    color: '#AAA9B2',
    fontSize: 16,
    marginTop: 3,
    marginBottom: 29,
  },
  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  inputIconText: {
    fontSize: 20,
    marginRight: 14,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },
  loginBtn: {
    marginTop: 16,
    width: '100%',
    height: 62,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A811DA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  loginBtnText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FFFFFF',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#AAA9B2',
    fontSize: 16,
  },
  footerLink: {
    color: '#A811DA',
    fontSize: 16,
    fontWeight: '600',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileIconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#F8F8FA',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTabs: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tabBtn: {
    marginRight: 16,
    paddingBottom: 4,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#A811DA',
  },
  tabText: {
    fontSize: 16,
    color: '#AAA9B2',
    fontWeight: '600',
  },
  activeTabText: {
    fontSize: 16,
    color: '#1B1923',
    fontWeight: '600',
  },
  categoryScroll: {
    maxHeight: 45,
    marginBottom: 15,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F8F8FA',
    borderRadius: 14,
    marginRight: 8,
    height: 38,
    justifyContent: 'center',
  },
  categoryChipActive: {
    backgroundColor: '#A811DA',
  },
  categoryChipText: {
    fontSize: 14,
    color: '#716F7B',
    fontWeight: '600',
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },
  bookIcon: {
    fontSize: 32,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1923',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#AAA9B2',
    marginTop: 2,
  },
  bookCategory: {
    fontSize: 12,
    color: '#A811DA',
    marginTop: 4,
    fontWeight: '600',
  },
  bookStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
  statusGreen: {
    color: '#34C759',
  },
  statusOrange: {
    color: '#FF9500',
  },
  detailHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailIcon: {
    fontSize: 64,
    marginBottom: 14,
  },
  descBox: {
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },
  descTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1923',
    marginBottom: 6,
  },
  descText: {
    fontSize: 15,
    color: '#716F7B',
    lineHeight: 22,
  },
  readerBox: {
    flex: 1,
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },
  readerText: {
    fontSize: 16,
    color: '#1B1923',
    lineHeight: 26,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    padding: 24,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1B1923',
  },
  profilePhone: {
    fontSize: 16,
    color: '#AAA9B2',
    marginTop: 4,
  },
});