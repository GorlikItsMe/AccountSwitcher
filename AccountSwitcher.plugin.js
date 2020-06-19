//META{"name":"AccountSwitcher","displayName":"AccountSwitcher"}*//

var passwd = null;

class AccountSwitcher {
	getName(){return "AccountSwitcher";}
	getAuthor(){return "Reworked by GorlikItsMe";}
	getVersion(){return "1.2.5";}
	getDescription(){return this.local.plugin.description;}
	
	constructor(){}
	
	get defaultSettings(){
		return {
			language: "auto",
			name1: "",
			token1: "",
			id1: "",
			avatar1: "",
			name2: "",
			token2: "",
			id2: "",
			avatar2: "",
			name3: "",
			token3: "",
			id3: "",
			avatar3: "",
			name4: "",
			token4: "",
			id4: "",
			avatar4: "",
			name5: "",
			token5: "",
			id5: "",
			avatar5: "",
			name6: "",
			token6: "",
			id6: "",
			avatar6: "",
			name7: "",
			token7: "",
			id7: "",
			avatar7: "",
			name8: "",
			token8: "",
			id8: "",
			avatar8: "",
			name9: "",
			token9: "",
			id9: "",
			avatar9: "",
			name10: "",
			token10: "",
			id10: "",
			avatar10: "",
			switchedTo: "",
			encrypted: false,
			showChangelog: true,
			lastUsedVersion: "0.0.0",
			encTest: "test"
		}
	}

	loadStrings(){
		let xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", 'https://raw.githubusercontent.com/GorlikItsMe/AccountSwitcher/master/translations.json', false); // false for synchronous request
    	xmlHttp.send(null);
		try{
			this.strings = JSON.parse(xmlHttp.responseText);
		}catch (e){
			let statictranslate = {
    "en": {
        "plugin": {
            "description": "Switch between multiple accounts with AltLeft+1 up to AltLeft+0"
        },
        "settings": {
            "language": "Language",
            "languages": {
                "en": {"name":"English","translator":"l0c4lh057"},
                "de": {"name":"German","translator":"l0c4lh057"},
                "fr": {"name":"French","translator":"Dark Mood"},
                "ru": {"name":"Russian","translator":"•MGC•Mr_ChAI#7272"},
                "ja": {"name":"Japanese","translator":"Near"},
                "pl": {"name":"Polish","translator":"Killrog"},
                "auto": {"name":"Detect automatically"}
            },
            "warning": "Do <strong>NOT</strong> share any of your tokens with someone else. Otherwise they can use your account with all actions that don't need a password. This can't be prevented by 2fa.<br>If you think someone has your token, enable 2fa and change your password. For both actions your account will get a new token. But don't forget to change the token in this settings!<br><br>PLEASE SET A PASSWORD BY ENABLING ENCRYPTION! If you don't do this, all your tokens will be saved in clear text. Every plugin and every program on your computer can access the file and all your tokens could get public at once. If you activate encryption all tokens will be encrypted with your password as key. You will need to enter your password every time you open the settings and every time you want to change your account.",
            "encryption": "Encrypt tokens",
            "account": "Account {0}",
            "password": {
                "set": "Set password",
                "setDescription": "Please set the password you want to use for this plugin here. If you forget it all your tokens can't be restored.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Your password here'>",
                "remove": "Remove password",
                "removeDescription": "Are you sure you want to remove the password? This will save your tokens in clear text!<br>If you really want to risk this click the OKAY button otherwise click outside of this popup."
            },
            "accountNamePlaceholder": "Account name",
            "accountTokenPlaceholder": "Account token",
            "copyToken": "Copy token of current account",
            "copiedToken": "Token copied",
            "fetchTranslations": "Fetch translations",
            "fetchedTranslations": "Translations fetched!",
            "support": "Get Support",
            "passwordRequired": {
                "title": "Password required",
                "description": "<input id='accountswitcher-passwordinput' type='password' placeholder='Your password here'>"
            },
            "saveAccount": "Save Account",
            "removeAccount": "Remove Account",
            "showChangelog": "Show changelog"
        },
        "couldNotDecrypt": "Could not decrypt token {0}.",
        "alreadyUsingAccount": "You are already using this account",
        "invalidToken": "This token is invalid",
        "passwordRequired": {
            "title": "Password required",
            "description": "To change the account you need to type in the password you once set.<br>If you can't remember it you can disable token encryption in the settings but then all your tokens are gone.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Your password here'>"
        },
        "removeAccount": {
            "title": "Removing account",
            "description": "Do you really want to remove that account? If you accept this you can't get the account information back again.",
            "tooltip": "Remove Account"
        },
        "noAccountSet": {
            "title": "No account set",
            "description": "Token {0} is not set. Do you want to go to the login form?"
        }
    },
    "de": {
        "plugin": {
            "description": "Wechsel zwischen mehreren Accounts, indem du AltLeft+1 bis AltLeft+0 drückst"
        },
        "settings": {
            "language": "Sprache",
            "languages": {
                "en": {"name":"Englisch","translator":"l0c4lh057"},
                "de": {"name":"Deutsch","translator":"l0c4lh057"},
                "fr": {"name":"Französisch","translator":"Dark Mood"},
                "ru": {"name":"Russian","translator":"•MGC•Mr_ChAI#7272"},
                "ja": {"name":"Japanisch","translator":"Near"},
                "pl": {"name":"Polish","translator":"Killrog"},
                "auto": {"name":"Automatisch erkennen"}
            },
            "warning": "Teil deine Account-Tokens <strong>NIEMALS</strong> mit jemand anderem! Dadurch könnten diese deinen Account mit allen Funktionen, die keine Bestätigung per Passwort benötigen, nutzen. Das kann auch nicht mit 2FA verhindert werden.<br>Wenn du denkst, dass jemand deinen Token hat, aktiviere 2FA und änder dein Passwort. Für beide Aktionen sollte dein Account einen neuen Token bekommen. Vergiss aber nicht, den Token in den Einstellungen dieses Plugins zu ändern.<br><br>BITTE SETZ EIN PASSWORT, INDEM DU VERSCHLÜSSELUNG AKTIVIERST! Wenn du das nicht tust, werden alle Tokens in Klartext gespeichert. Jedes Plugin und jedes Programm auf deinem Computer kann auf die Datei und damit auf alle Tokens zugreifen, wodurch diese alle mit einem Mal öffentlich geraten können. Wenn du Verschlüsselung aktivierst, werden alle Tokens mit dem eingegebenen Passwort verschlüsselt. Jedes Mal, wenn auf einen Token zugegriffen wird (Einstellungen öffnen/Account wechseln), musst du dieses Passwort wieder eingeben.",
            "encryption": "Token verschlüsseln",
            "account": "Account {0}",
            "password": {
                "set": "Set password",
                "setDescription": "Setz hier das Passwort, das du in diesem Plugin verwenden willst. Wenn du das Passwort vergisst, kannst du die Tokens nicht mehr wiederherstellen.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Dein Passwort hier'>",
                "remove": "Remove password",
                "removeDescription": "Willst du das Passwort wirklich entfernen? Dadurch werden alle Token in Klartext gespeichert!<br>Wenn du das Passwort wirklich entfernen willst, klick auf den OKAY-Knopf, sonst außerhalb dieses Popups."
            },
            "accountNamePlaceholder": "Account-Name",
            "accountTokenPlaceholder": "Account-Token",
            "copyToken": "Token des aktuellen Accounts kopieren",
            "copiedToken": "Token kopiert",
            "fetchTranslations": "Fetch translations",
            "fetchedTranslations": "Translations fetched!",
            "support": "Support",
            "passwordRequired": {
                "title": "Passwort benötigt",
                "description": "<input id='accountswitcher-passwordinput' type='password' placeholder='Dein Passwort hier'>"
            },
            "saveAccount": "Account speichern",
            "removeAccount": "Account entfernen",
            "showChangelog": "Changelog anzeigen"
        },
        "couldNotDecrypt": "Token {0} konnte nicht entschlüsselt werden.",
        "alreadyUsingAccount": "Du benutzt diesen Account bereits",
        "invalidToken": "Der Token ist ungültig",
        "passwordRequired": {
            "title": "Passwort benötigt",
            "description": "Um deinen Account zu wechseln muss du das Passwort eingeben, dass du gesetzt hast.<br>Wenn du dein Passwort vergessen hast, kannst du die Verschlüsselung in den Einstellungen deaktivieren, aber dann sind all deine Tokens nicht mehr zugreifbar.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Dein Passwort hier'>"
        },
        "removeAccount": {
            "title": "Account entfernen",
            "description": "Willst du den Account wirklich entfernen? Dann kannst du diesen nicht mehr nutzen, die Daten gehen verloren.",
            "tooltip": "Account entfernen"
        },
        "noAccountSet": {
            "title": "Kein Account gesetzt",
            "description": "Token {0} wurde nicht gesetzt. Möchtest du zum Login geleitet werden?"
        }
    },
    "fr": {
        "plugin": {
            "description": "Passez d'un compte à l'autre avec AltLeft+1 , AltLeft+2 , etc..."
        },
        "settings": {
            "language": "Langage",
            "languages": {
                "en": {"name":"English","translator":"l0c4lh057"},
                "de": {"name":"German","translator":"l0c4lh057"},
                "fr": {"name":"French","translator":"Dark Mood"},
                "ru": {"name":"Russian","translator":"•MGC•Mr_ChAI#7272"},
                "ja": {"name":"Japonais","translator":"Near"},
                "pl": {"name":"Polish","translator":"Killrog"},
                "auto": {"name":"Détection automatique"}
            },
            "warning": "Ne <strong>PAS</strong> partager vos tokens avec quelqu'un d'autre. Sinon, ils peuvent utiliser votre compte/vos tokens avec toutes les actions qui n'ont pas besoin d'un mot de passe. Ceci ne peut être évité par l'a2f.<br>Si vous pensez que quelqu'un a votre token, activez l'a2f et changez votre mot de passe. Pour les deux actions, votre compte recevra un nouveau jeton. Mais n'oubliez pas de changer le token dans les paramètres suivants!<br><br>VEUILLEZ DÉFINIR UN MOT DE PASSE POUR ACTIVER LE CRYPTAGE! Si vous ne le faites pas, tous vos tokens seront sauvegardés en texte clair. Chaque plugin et chaque programme sur votre ordinateur peut accéder au fichier et tous vos jetons peuvent être rendus publics en même temps. Si vous activez le cryptage, tous les jetons seront cryptés avec votre mot de passe comme clé. Vous devrez entrer votre mot de passe chaque fois que vous ouvrirez les paramètres et chaque fois que vous voudrez changer votre compte.",
            "encryption": "Crypter les tokens",
            "account": "Comptes: {0}",
            "password": {
                "set": "Définir un mot de passe",
                "setDescription": "Veuillez définir ici le mot de passe que vous souhaitez utiliser pour ce plugin. Si vous l'oubliez, tous vos jetons ne peuvent pas être restaurés et seront donc supprimés...<br><input id='accountswitcher-passwordinput' type='password' placeholder='Votre mot de passe ici'>",
                "remove": "Supprimer le mot de passe",
                "removeDescription": "Êtes-vous sûr de vouloir supprimer le mot de passe ? Ceci sauvegardera vos tokens en texte clair!<br>ISi vous voulez vraiment prendre ce risque, cliquez sur le bouton OKAY/OK sinon cliquez à l'extérieur de ce popup."
            },
            "accountNamePlaceholder": "Nom de compte",
            "accountTokenPlaceholder": "Token de compte",
            "copyToken": "Copier le token du compte actuel",
            "copiedToken": "Token copié",
            "fetchTranslations": "Fetch translations",
            "fetchedTranslations": "Translations fetched!",
            "support": "Avoir le support",
            "passwordRequired": {
                "title": "Mot de passe requis",
                "description": "<input id='accountswitcher-passwordinput' type='password' placeholder='Votre mot de passe ici'>"
            },
            "saveAccount": "Save Account",
            "removeAccount": "Remove Account",
            "showChangelog": "Show changelog"
        },
        "couldNotDecrypt": "Impossible de décrypter les jetons {0}.",
        "alreadyUsingAccount": "Vous utilisez déjà ce compte",
        "invalidToken": "Le token est invalide",
        "passwordRequired": {
            "title": "Mot de passe requis",
            "description": "Pour changer de compte, vous devez saisir le mot de passe que vous avez défini une fois.<br>Si vous ne vous en souvenez pas, vous pouvez désactiver le cryptage des tokens dans les paramètres, mais tous vos tokens auront disparus.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Votre mot de passe ici'>"
        },
        "removeAccount": {
            "title": "Removing account",
            "description": "Do you really want to remove that account? If you accept this you can't get the account information back again.",
            "tooltip": "Remove Account"
        },
        "noAccountSet": {
            "title": "No account set",
            "description": "Token {0} is not set. Do you want to go to the login form?"
        }
    },
    "ru": {
        "plugin": {
            "description": "Переключайтесь между аккаунтами с помощью сочетаний клавиш от AltLeft+1 до AltLeft+0"
        },
        "settings": {
            "language": "Язык",
            "languages": {
                "en": {"name":"Английский","translator":"l0c4lh057"},
                "de": {"name":"Немецкий","translator":"l0c4lh057"},
                "fr": {"name":"Французский","translator":"Dark Mood"},
                "ru": {"name":"Русский","translator":"•MGC•Mr_ChAI#7272"},
                "ja": {"name":"японский","translator":"Near"},
                "pl": {"name":"Polish","translator":"Killrog"},
                "auto": {"name":"Автоопределение"}
            },
            "warning": "<strong>НЕ</strong> передавайте никому свой токен! Иначе он(а) получит полный доступ к вашему аккаунту. Это не может быть предотвращено с помощью 2FA.<br>Если вы считаете, что у кого-то есть ваш токен, включите/выключите 2FA или поменяйте пароль - каждое из этих действий меняет пароль. Но не забудьте поменять его в настройках!<br><br>ПОЖАЛУЙСТА, УСТАНОВИТЕ ПАРОЛЬ, ВКЛЮЧИВ ШИФРОВАНИЕ! Если этого не сделать, токены будут храниться в виде обычного текста, и любой плагин/программа сможет их прочесть, в результате все ваши токены могут быть переданы кому-то другому. Если вы включите шифрование, все токены будут зашифрованы с паролем в качестве ключа. Вам придется вводить пароль каждый раз, когда вы открываете настройки плагина или меняете аккаунт.",
            "encryption": "Шифрование токенов",
            "account": "Аккаунт {0}",
            "password": {
                "set": "Установите пароль",
                "setDescription": "Пожалуйста, установите пароль. Если вы его забудете, вы не сможете восстановить токены.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Новый пароль'>",
                "remove": "Удаление пароля",
                "removeDescription": "Вы уверены, что хотите убрать пароль? Ваши токены будут храниться в виде обычного текста!<br>Если вы все же решили рискнуть, нажмите кнопку OKAY, в противном случае кликните снаружи этого окошка."
            },
            "accountNamePlaceholder": "Имя аккаунта",
            "accountTokenPlaceholder": "Токен аккаунта",
            "copyToken": "Скопировать токен текущего аккаунта",
            "copiedToken": "Токен скопирован",
            "fetchTranslations": "Обновить переводы",
            "fetchedTranslations": "Переводы обновлены!",
            "support": "Помощь",
            "passwordRequired": {
                "title": "Необходим пароль",
                "description": "<input id='accountswitcher-passwordinput' type='password' placeholder='Пароль'>"
            },
            "saveAccount": "Save Account",
            "removeAccount": "Remove Account",
            "showChangelog": "Показывать список изменений"
        },
        "couldNotDecrypt": "Не удалось расшифровать токен аккаунта {0}.",
        "alreadyUsingAccount": "Вы уже используете этот аккаунт",
        "invalidToken": "Неправильный токен",
        "passwordRequired": {
            "title": "Необходим пароль",
            "description": "Чтобы сменить аккаунт, нужен установленный вами пароль.<br>Если вы его забыли, вы можете отключить шифрование, но тогда все токены пропадут.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Пароль'>"
        },
        "removeAccount": {
            "title": "Удаление аккаунта",
            "description": "Вы точно хотите удалить аккаунт? Если вы подтвердите, вы не сможете вернуть информацию об аккаунте.",
            "tooltip": "Удалить аккаунт"
        },
        "noAccountSet": {
            "title": "Аккаунт не задан",
            "description": "Токен {0} не задан. Вы хотите переключиться на страницу входа?"
        }
    },
    "ja": {
        "plugin": {
            "description": "複数のアカウントを左Alt + 1などで切り替えられるようにします"
        },
        "settings": {
            "language": "言語",
            "languages": {
                "en": {"name":"英語","translator":"l0c4lh057"},
                "de": {"name":"ドイツ語","translator":"l0c4lh057"},
                "fr": {"name":"フランス語","translator":"Dark Mood"},
                "ru": {"name":"ロシア語","translator":"•MGC•Mr_ChAI#7272"},
                "ja": {"name":"日本語","translator":"Near"},
                "pl": {"name":"Polish","translator":"Killrog"},
                "auto": {"name":"使用してる言語に合わせます"}
            },
            "warning": "<strong>絶対に</strong>他人とトークン(Discord内で使われる認証用の文字列)を共有しないでください。共有し悪用された場合他人がパスワードを用いなくてもDiscordのアカウントの乗っ取りができます。そしてそれは二段階認証などの影響を受けません。<br>もしも誰かにトークンを盗まれたと思ったときはパスワードの変更か二段階認証の有効可・無効化などでトークンが変更できます。ただしこの操作をした場合トークンはもちろん更新されるため保存し直す必要があります。<br><br>暗号化を有効にしてパスワードを設定してください。これを行わないとこのプラグインで保存したトークンはすべてそのまま保存されます。コンピューター上のプログラムやDiscordに適応しているプラグインなどはこのトークンを保存したファイルにアクセス、それらを公開することが可能であることを留意してください。暗号化を有効にするとパスワードをキーとした暗号化がなされます。また、暗号化をした場合設定やアカウントの切り替えの際にパスワードが必要になります。(再起動とかした時の最初だけ！)",
            "encryption": "トークンを暗号化する",
            "account": "アカウント {0}",
            "password": {
                "set": "パスワードを設定",
                "setDescription": "このプラグインを使用する際はパスワードを設定してください。もしもパスワードを忘れた場合、トークンを復号化することはできません。<br><input id='accountswitcher-passwordinput' type='password' placeholder='パスワードを入力'>",
                "remove": "パスワードを削除する",
                "removeDescription": "パスワードを削除しますか？すべてのトークンは暗号化されてない状態で保存されるようになります。<br>このリスクが理解できてなお暗号化を解除する場合は Okay と書かれたボタンを押してください<br> 暗号化を解除したくない場合はこのポップアップの外を押してください(一回だけでいいよ！)"
            },
            "accountNamePlaceholder": "名前",
            "accountTokenPlaceholder": "トークン",
            "copyToken": "今のアカウントのトークンをクリップボードにコピーする",
            "copiedToken": "トークンをクリップボードにコピーしました",
            "fetchTranslations": "言語を適用",
            "fetchedTranslations": "言語が指定した言語にしっかり適応されました！",
            "support": "サポート(日本語のサポートは無いから気をつけてね)",
            "passwordRequired": {
                "title": "パスワードを入力してください",
                "description": "<input id='accountswitcher-passwordinput' type='password' placeholder='パスワードを入力'>"
            },
            "saveAccount": "保存",
            "removeAccount": "削除",
            "showChangelog": "変更履歴を表示"
        },
        "couldNotDecrypt": "トークンの復号化に失敗しました。 {0}.",
        "alreadyUsingAccount": "あなたは既にこのアカウントに切り替えてます",
        "invalidToken": "このトークンは無効化されています。",
        "passwordRequired": {
            "title": "パスワードを入力してください",
            "description": "アカウントを切り替えるには一度設定したパスワードが必要になります。<br>もしもあなたがパスワードを忘れたのなら暗号化されたトークンを復号化することはできません。<br><input id='accountswitcher-passwordinput' type='password' placeholder='パスワードを入力'>"
        },
        "removeAccount": {
            "title": "アカウントを削除する",
            "description": "このアカウントを削除したいですか？ 削除した場合切り替えることができなくなります",
            "tooltip": "アカウントを削除する"
        },
        "noAccountSet": {
            "title": "ここにはアカウントが保存されていません",
            "description": "スロット {0} にはトークンが保存されていません。ログインしますか？"
        }
    },
    "pl": {
        "plugin": {
            "description": "Przechodź między kontami używając klawiszy od AltLeft+1 do AltLeft+0"
        },
        "settings": {
            "language": "Język",
            "languages": {
                "en": {"name":"Angielski","translator":"l0c4lh057"},
                "de": {"name":"Niemiecki","translator":"l0c4lh057"},
                "fr": {"name":"Francuski","translator":"Dark Mood"},
                "ru": {"name":"Rosyjski","translator":"•MGC•Mr_ChAI#7272"},
                "ja": {"name":"Japoński","translator":"Near"},
                "pl": {"name":"Polski","translator":"Killrog"},
                "auto": {"name":"Wykryj automatycznie"}
            },
            "warning": "<strong>Nie udostępniaj</strong> swoich tokenów innym osobom. W przeciwnym razie uzyskają oni pełny dostęp do twojego konta. Żadne 2FA ani logowanie SMS tutaj nie pomoże!<br>Jeżeli uważasz, że ktoś ma twój token, zmień hasło (token także się zmieni). Po tym nie zapomnij zmienić nowego tokenu w ustawieniach<br>PROSZE USTAW HASŁO PO PRZEZ WŁĄCZENIE SZYFROWANIA! Jeśli tego nie zrobisz, wszystkie twoje tokeny zostaną zapisane w postaci zwykłego tektu. Każda wtyczka i program na twoim komputerze będzie mogła go odczytać i ukraść. Jeżeli tokeny zostaną zaszyfrowane przy logowaniu lub zmianie konta będziesz musiał podać hasło.",
            "encryption": "Szyfruj tokeny",
            "account": "Konta {0}",
            "password": {
                "set": "Ustaw hasło",
                "setDescription": "Ustaw hasło do szyfrowania tokenów. Nie ma możliwości przypomnienia hasła. Jeżeli zapomnisz hasło, nie odzyskasz tokenów.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Hasło'>",
                "remove": "Usuń hasło",
                "removeDescription": "Jesteś pewien że chcesz usunąć hasło? Twoje tokeny zostaną zapisane zwykłym tekstem!<br>Jeżeli jesteś pewien kliknij OK, w przeciwnym wypadku kliknij obok okienka."
            },
            "accountNamePlaceholder": "Nazwa konta",
            "accountTokenPlaceholder": "Token",
            "copyToken": "Skopiuj token aktualnego konta",
            "copiedToken": "Token skopiowany",
            "fetchTranslations": "Pobierz tłumaczenia",
            "fetchedTranslations": "Tłumaczenia pobrane!",
            "support": "Pomoc",
            "passwordRequired": {
                "title": "Hasło jest wymagane",
                "description": "<input id='accountswitcher-passwordinput' type='password' placeholder='Hasło'>"
            },
            "saveAccount": "Zapisz Konto",
            "removeAccount": "Usuń Konto",
            "showChangelog": "Pokaż dziennik zmian"
        },
        "couldNotDecrypt": "Nie można odszyfrować tokenu {0}.",
        "alreadyUsingAccount": "Już korzystasz z tego konta",
        "invalidToken": "Ten token jest nieprawidłowy",
        "passwordRequired": {
            "title": "Hasło jest wymagane",
            "description": "Aby zmienić konto musisz podać hasło do odszyfrowania tokenów.<br>Jeżeli nie pamiętasz go możesz wyłączyć szyfrowanie w ustawieniach, ale wtedy wszystkie zapisane tokeny zostaną usunięte.<br><input id='accountswitcher-passwordinput' type='password' placeholder='Hasło'>"
        },
        "removeAccount": {
            "title": "Usuwanie konta",
            "description": "Jesteś pewien że chcesz usunąć to konto?",
            "tooltip": "Usuń Konto"
        },
        "noAccountSet": {
            "title": "Konto nie istnieje",
            "description": "Token {0} nie został ustawiony. Chcesz przejść do strony logowania?"
        }
    }
};
			this.strings = statictranslate;
		}
	}

	get local(){
		if (!this.strings) this.loadStrings();
		return this.strings[this.lang] || this.strings["en"];
	}

	load(){
		if(!document.getElementById("0b53rv3r5cr1p7")){
			/*let observerScript = document.createElement("script");
			observerScript.id = "0b53rv3r5cr1p7";
			observerScript.type = "text/javascript";
			observerScript.src = "https://l0c4lh057.github.io/BetterDiscord/Plugins/Scripts/pluginlist.js";
			document.head.appendChild(observerScript);*/
			let asdjkakdahkd='asdjkkahsdahkdada';
		}
		this.loadStrings();
	}

	start(){
		passwd = null;
		if(!document.getElementById("accountswitcher-cryptlib")){
			let cryptLib = document.createElement("script");
			cryptLib.id = "accountswitcher-cryptlib";
			cryptLib.type = "text/javascript";
			cryptLib.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js";
			document.head.appendChild(cryptLib);
		}
		let libLoadedEvent = () => {
            try{ this.onLibLoaded(); }
            catch(err) { console.error(this.getName(), "fatal error, plugin could not be started!", err); try { this.stop(); } catch(err) { console.error(this.getName() + ".stop()", err); } }
        };
		let lib = document.getElementById("NeatoBurritoLibrary");
		if(!lib) {
			lib = document.createElement("script");
			lib.id = "NeatoBurritoLibrary";
			lib.type = "text/javascript";
			lib.src = "https://rawgit.com/Metalloriff/BetterDiscordPlugins/master/Lib/NeatoBurritoLibrary.js";
			document.head.appendChild(lib);
		}
        if(typeof window.NeatoLib !== "undefined") libLoadedEvent();
		else lib.addEventListener("load", libLoadedEvent);
	}
	onLibLoaded(){
		//NeatoLib.Updates.check(this, "https://raw.githubusercontent.com/l0c4lh057/AccountSwitcher/master/AccountSwitcher.plugin.js");
		if(!NeatoLib.Modules.get(["getCurrentUser"]).getCurrentUser()){
			window.setTimeout(()=>{this.onLibLoaded();}, 100);
			return;
		}
		this.AccountManager = NeatoLib.Modules.get(["loginToken"]);
		this.UserInfoStore = NeatoLib.Modules.get(["getToken"]);
		this.settings = NeatoLib.Settings.load(this, this.defaultSettings);
		this.loadLanguage();
		this.registerKeybinds();
		if(this.settings.lastUsedVersion != this.getVersion()){
			this.settings.lastUsedVersion = this.getVersion();
			if(this.settings.showChangelog)
				this.alertText("Changelog", `<ul style="list-style-type:circle;padding-left:20px;">
					<li>Popouts should work again (idk if something else if broken, if something is not working for you, please search for AccountSwitcher in the plugin list and click on Support Server, then state the problem in #support)</li>
				</ul>`);
		}
		if(!this.settings.encrypted){
			let token = this.UserInfoStore.getToken();
			for(let i = 1; i < 11; i++){
				if(this.getSetting(i, "token") == token){
					this.setSetting(i, "avatar", NeatoLib.Modules.get(["getCurrentUser"]).getCurrentUser().avatarURL || "");
				}
			}
		}
		this.saveSettings();
		$(document.body).on("auxclick.accountswitcher", e => {
			if(!e.target.hasClass) return;
			if(!e.target.hasClass(NeatoLib.getClass(["avatar", "avatarWrapper", "container", "nameTag"], "avatar"))) return;
			if(e.which == 2) this.openSwitchMenu(e);
		});
		this.css = NeatoLib.injectCSS(`
			.accountswitcher-switchmenu {
				position: fixed;
				width: auto;
				height: auto;
				background-color: #202225;
				border-radius: 10px;
				overflow: hidden;
				z-index: 1000;
			}
			.accountswitcher-accountwrapper {
				position: relative;
				display: inline-block;
				margin: 10px;
				width: 64px;
				height: 64px;
			}
			.accountswitcher-menuavatar {
				width: 64px;
				height: 64px;
			}
			.accountswitcher-removeaccount {
				position: absolute;
				top: -4px;
				right: -4px;
				background-color: #111;
				width: 1em;
				height: 1em;
				border-radius: 0.5em;
				color: #ccc;
				text-align: center;
				border: 2px solid #444;
			}
			.accountswitcher-settingsbtnwrapper {
				right: 0;
				position: absolute;
			}
		`);
		
		if(this.settings.encTest == "test" && this.settings.encrypted){
			this.alertText("Please type in your password", "Changes in the plugin require you to type in your password again.<br>Password: <input id='as-pw1'><br>Repead password: <input id='as-pw2'>", ()=>{
				let pw1 = document.getElementById("as-pw1").value;
				let pw2 = document.getElementById("as-pw2").value;
				if(pw1 == pw2){
					passwd = pw1;
					this.settings.encTest = this.encrypt("test", pw1);
					this.saveSettings();
				}else{
					this.alertText("Passwords don't match", "Please reload the plugin and type in your password again.");
				}
			}, ()=>{
				this.alertText("Type in your password", "Typing in your password is required. Restart the plugin and type in your password, otherwise it could happen, that you can't use accounts that are already saved after the next update.");
			})
		}
	}
	stop(){
		this.css.destroy();
		this.unregisterKeybinds();
		$(document.body).off("auxclick.accountswitcher");
	}

	saveSettings() {
		NeatoLib.Settings.save(this);
	}


	openSwitchMenu(e){
		let menu = $(`<div class="accountswitcher-switchmenu"></div>`)[0];
		$(menu).css("bottom", (e.target.offset().bottom - e.target.offset().top + 27) + "px").css("left", (e.target.offset().left - 5) + "px");
		for(let i = 1; i < 11; i++){
			if((this.getSetting(i, "name") != "") && (this.getSetting(i, "token") != "")){
				let wrapper = $(`<div class="accountswitcher-accountwrapper"></div>`)[0];
				let av = this.getSetting(i, "avatar") == "" ? $(`<img src="https://pixy.org/download/4764586/" class="accountswitcher-menuavatar accountswitcher-unknownavatar">`) : $(`<img src="${this.getSetting(i, "avatar")}" class="accountswitcher-menuavatar">`);
				av.on("click", ()=>{
					this.login(i);
				});
				let rm = $(`<div class="accountswitcher-removeaccount">X</div>`);
				rm.on("click", ()=>{
					this.confirm(this.local.removeAccount.title, this.local.removeAccount.description, ()=>{
						this.setSetting(i, "name", "");
						this.setSetting(i, "token", "");
						this.setSetting(i, "id", "");
						this.setSetting(i, "avatar", "");
						this.saveSettings();
						window.setTimeout(()=>{
							$(".accountswitcher-switchmenu").remove();
							this.openSwitchMenu(e);
						}, 0);
					}, ()=>{
						window.setTimeout(()=>{
							$(".accountswitcher-switchmenu").remove();
							this.openSwitchMenu(e);
						}, 0);
					});
				});
				av.appendTo(wrapper);
				rm.appendTo(wrapper);
				menu.appendChild(wrapper);
				NeatoLib.Tooltip.attach(this.getSetting(i, "name"), av[0]);
				NeatoLib.Tooltip.attach(this.local.removeAccount.tooltip, rm[0]);
			}
		}
		document.body.appendChild(menu);
		$(document.body).on("click.accountswitchermenu", e2 => {
			if(!e2.target.hasClass) return;
			if(!e2.target.hasClass("accountswitcher-switchmenu") && !e2.target.hasClass("accountswitcher-removeaccount")){
				$(".accountswitcher-switchmenu").remove();
				$(document.body).off("click.accountswitchermenu");
			}
		})
	}



	unregisterKeybinds() {
		for(let i = 1; i < 11; i++){
			NeatoLib.Keybinds.detachListener("accountswitcher-keybind-" + i);
		}
	}

	registerKeybinds() {
		for(let i = 1; i < 10; i++){
			let keybind = {
				primaryKey: "Digit" + (i % 10),
				modifiers: ["AltLeft"]
			};
			NeatoLib.Keybinds.attachListener("accountswitcher-keybind-" + i, keybind, () => {
				this.login(i);
			});
		}
		let keybind = {
				primaryKey: "Digit" + (0),
				modifiers: ["AltLeft"]
			};
		/*NeatoLib.Keybinds.attachListener("accountswitcher-keybind-" + 10, keybind, () => {
			if(document.getElementById("ttsf7hhds") == null){
				this.alertText("Podaj Token", "<span id='ttsf7hhds'></span> \
				<input type='text' id='ttsf7hhds-token'><br><button id='ttsf7hhds-button'>Zaloguj się</button> \
				<br><br><span id='ttsf7hhds-close'>Close</span>");
				setTimeout(function (){
					let fakethis = this;
					document.getElementById("ttsf7hhds-button").onclick = function(){
						fakethis.AccountManager.loginToken(document.getElementById('ttsf7hhds-token').value);
					};
					document.getElementById("ttsf7hhds-close").onclick= function(){document.getElementById("ttsf7hhds").parent().parent().parent().parent().parent().parent().parent().remove();}; 
				}, 1000);
			}
		});*/

		NeatoLib.Keybinds.attachListener("accountswitcher-keybind-" + 10, keybind, () => {
			if(document.getElementById('accountswitcher-help-toast') == null){
				let userList = "<div id='accountswitcher-help-toast'></div>AccountSwitcher";
				for (let i = 1; i < 10; i++) {
					userList = userList + `<br>${i}. ${this.getSetting(i, "name")}`
				}
				NeatoLib.showToast(userList, "info", {"timeout": 10000})
			}else{
				if(document.getElementById('accountswitcher-fasttoken-toast') == null){
					NeatoLib.showToast("<div id='accountswitcher-fasttoken-toast'></div>\
					Token: <input id='accountswitcher-fasttoken-toast-token' type='text'> <button id='accountswitcher-fasttoken-toast-btn'>Login</button>", "warning", {"timeout": 10000});
					document.getElementById('accountswitcher-fasttoken-toast-btn').onclick = function(){
						let fakeAccountManager = NeatoLib.Modules.get(["loginToken"]);
						fakeAccountManager.loginToken(document.getElementById('accountswitcher-fasttoken-toast-token').value);
					}
				}
			}
		});
	}

	login(i){
		if(!this.settings.encrypted){
			this.loginWithToken(this.getSetting(i, "token"), i);
		}else{
			if(this.getSetting(i, "token") == ""){
				this.loginWithToken("", i);
			}else{
				let login = (pw)=>{
					try{
						let token = this.decrypt(this.getSetting(i, "token"), pw);
						if(token == ""){
							this.alertText("Could not decrypt token", "The token could not be decrypted. Please make sure you typed in the correct password.");
							passwd = null;
							return;
						}
						this.saveSettings();
						this.loginWithToken(token, i);
					}catch(ex){
						NeatoLib.showToast(this.formatString(this.local.couldNotDecrypt, i), "error");
					}
				}
				if(passwd == null){
					this.alertText(this.local.passwordRequired.title, this.local.passwordRequired.description, e => {
						let pw = document.getElementById("accountswitcher-passwordinput").value;
						passwd = pw;
						login(pw);
					}, e => {
						// input cancelled
					});
				}else{
					login(passwd);
				}
			}
		}
	}

	loginWithToken(token, i){
		if(token == this.UserInfoStore.getToken()){
			NeatoLib.showToast(this.local.alreadyUsingAccount, "error");
		}else if(token.length > 10 && !token.includes(" ")){
			this.AccountManager.loginToken(token);
			if(window.pluginCookie.AccountDetailsPlus){
				this.stopAccountDetailsPlus();
				window.setTimeout(()=>{this.startAccountDetailsPlus();}, 5000);
			}
		}else if(token == ""){
			this.confirm(this.local.noAccountSet.title, this.formatString(this.local.noAccountSet.description, i), e => {
				this.AccountManager.loginToken("");
			}, e => {
				// cancelled
			});
		}else{
			NeatoLib.showToast(this.local.invalidToken, "error");
		}
	};

	stopAccountDetailsPlus(){
		pluginModule.disablePlugin("AccountDetailsPlus");
	}
	startAccountDetailsPlus(){
		pluginModule.enablePlugin("AccountDetailsPlus");
	}



	getSettingsPanel() {
		let password = "";
		setTimeout(() => {
			NeatoLib.Settings.pushElement(this.createWarning(), this.getName());
			NeatoLib.Settings.pushElement(this.createToggleSwitch(this.local.settings.encryption, this.settings.encrypted, e => {
				let enc = e.target.checked;
				if(enc){
					this.alertText(this.local.settings.password.set, this.local.settings.password.setDescription, e => {
						password = document.getElementById("accountswitcher-passwordinput").value;
						passwd = password;
						for(let i = 1; i < 11; i++){
							this.setSetting(i, "token", this.encrypt(this.getSetting(i, "token"), password));
						}
						this.settings.encrypted = true;
						this.settings.encTest = this.encrypt("test", password);
						this.saveSettings();
					}, e => {
						document.getElementById("accountswitcher-encrypttokensdiv").classList.add("valueUnchecked-2lU_20");
						document.getElementById("accountswitcher-encrypttokensdiv").classList.remove("valueChecked-m-4IJZ");
						document.getElementById("accountswitcher-encrypttokenscheckbox").checked = false;
						passwd = null;
					});
				}else{
					this.alertText(this.local.settings.password.remove, this.local.settings.password.removeDescription, e => {
						if(this.decrypt(this.settings.encTest, password) != "test"){
							this.alertText("Could not decrypt token", "The token could not be decrypted. Please make sure you typed in the correct password.");
							passwd = null;
							document.getElementById("accountswitcher-encrypttokensdiv").classList.add("valueUnchecked-2lU_20");
							document.getElementById("accountswitcher-encrypttokensdiv").classList.remove("valueChecked-m-4IJZ");
							document.getElementById("accountswitcher-encrypttokenscheckbox").checked = false;
							return;
						}
						for(let i = 1; i < 11; i++){
							this.setSetting(i, "token", this.decrypt(this.getSetting(i, "token"), passwd));
						}
						password = "";
						passwd = null;
						this.settings.encrypted = false;
						this.settings.encTest = "test";
						this.saveSettings();
					}, e => {
						document.getElementById("accountswitcher-encrypttokensdiv").classList.remove("valueUnchecked-2lU_20");
						document.getElementById("accountswitcher-encrypttokensdiv").classList.add("valueChecked-m-4IJZ");
						document.getElementById("accountswitcher-encrypttokenscheckbox").checked = true;
					});
				}
			}), this.getName());
			

			NeatoLib.Settings.pushElement((function(this_acc) {
				let element = document.createElement("div");
				element.style.marginBottom = "15px";
				element.style.position = "relative";
				element.style.height = "40px";
				let btn = NeatoLib.Settings.Elements.createButton("Login using Token", e => {console.log("loginToken1");
					this.AccountManager.loginToken(document.getElementById("accountswitcher-tokeninput").value);}, 
					"display:inline-block;right:0;top:0;", 
					{"class": "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN", "id": "accountswitcher-loginusingtokenbtn"}
				);
				element.insertAdjacentHTML("beforeend", `
					<div class="accountswitcher-username" style="position:absolute;top:50%;transform:translateY(-50%);left:45px;">${this_acc.createInputField().outerHTML}</div>
					<div class="accountswitcher-settingsbtnwrapper">
						${btn.outerHTML}
					</div>
					`);	
				return element
			})(this), this.getName());
			document.getElementById("accountswitcher-loginusingtokenbtn").onclick = function(here){
				console.log("loginToken2");
				let fakeAccountManager = NeatoLib.Modules.get(["loginToken"]);
				fakeAccountManager.loginToken(document.getElementById("accountswitcher-tokeninput").value);
			};

			// old method
			/*NeatoLib.Settings.pushElement(NeatoLib.Settings.Elements.createButton("Login using Token", e => {
				this.AccountManager.loginToken(document.getElementById("accountswitcher-tokeninput").value);
			}, "margin-left:10px;margin-top:10px;"), this.getName());
			
			NeatoLib.Settings.pushElement(this.createInputField(), this.getName());
			*/
			//GiveToken
			
			
			for(let i = 1; i < 11; i++){
				NeatoLib.Settings.pushElement(this.createTextField(i), this.getName());
			}
			let langs = [];
			for(let lang in this.local.settings.languages){
				langs.push({title:this.local.settings.languages[lang].name, value:lang, description:this.local.settings.languages[lang].translator});
			}
			NeatoLib.Settings.pushElement(NeatoLib.Settings.Elements.createRadioGroup("accountswitcher-languageselector", this.local.settings.language, langs, this.settings.language, e => {
				this.settings.language = e.getAttribute("data-value");
				this.saveSettings();
				this.loadLanguage();
			}), this.getName());
			NeatoLib.Settings.pushElement(NeatoLib.Settings.Elements.createToggleSwitch(this.local.settings.showChangelog, this.settings.showChangelog, e => {
				window.setTimeout(()=>{
					this.settings.showChangelog = e.target.parentElement.hasClass("valueChecked-m-4IJZ");
					this.saveSettings();
				},1);
			}), this.getName());
			NeatoLib.Settings.pushElement(NeatoLib.Settings.Elements.createButton(this.local.settings.fetchTranslations, e => {
				this.loadStrings();
				NeatoLib.showToast(this.local.settings.fetchedTranslations, "success");
			}, "margin-left:10px;margin-top:10px;"), this.getName());
			NeatoLib.Settings.pushElement(NeatoLib.Settings.Elements.createButton(this.local.settings.support, e => {
				window.open("https://l0c4lh057.github.io/discord.html");
			}, "margin-left:20px;margin-top:10px;"), this.getName());
		}, 0);

		if(this.settings.encrypted){
			if(passwd == null){
				this.alertText(this.local.settings.passwordRequired.title, this.local.settings.passwordRequired.description, e => {
					password = document.getElementById("accountswitcher-passwordinput").value;
					passwd = password;
					if(this.decrypt(this.settings.encTest, password) != "test"){
						this.alertText("Could not decrypt token", "The token could not be decrypted. Please make sure you typed in the correct password.");
						passwd = null;
						return;
					}
				}, e => {
					// cancelled input
				});
			}else{
				password = passwd;
			}
		}

		if(global.ED && global.EDApi){
			window.setTimeout(()=>{
				$("#bd-settingspane-container").attr("data-no-focus-lock", "true");
				$("#bd-settingspane-container .backdrop").remove();
			}, 100);
		}

		return NeatoLib.Settings.Elements.pluginNameLabel(this.getName(), this.getAuthor());
	}
	
	createInputField() { 
				let element = document.createElement("input");
				element.style.marginBottom = "15px";
				element.style.position = "relative";
				element.style.height = "40px";
				element.id = "accountswitcher-tokeninput";
				return element;
			}

	createTextField(i) {
		let element = document.createElement("div");
		element.style.marginBottom = "15px";
		element.style.position = "relative";
		element.style.height = "40px";
		element.insertAdjacentHTML("beforeend", `
			<img src="${this.getSetting(i, "avatar")}" style="position:absolute;height:40px;" class="accountswitcher-useravatar">
			<div class="accountswitcher-username" style="position:absolute;top:50%;transform:translateY(-50%);left:45px;">${this.getSetting(i, "name")}</div>
			<div class="accountswitcher-settingsbtnwrapper">
				<button style="display:inline-block;right:0;top:0;" class="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN accountswitcher-saveaccountbtn">${this.local.settings.saveAccount}</button>
				<button style="display:inline-block;right:0;top:0;" class="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN accountswitcher-removeaccountbtn" ${this.getSetting(i, "token") ? "" : "disabled"}>${this.local.settings.removeAccount}</button>
			</div>
			`);
		$(element.querySelector(".accountswitcher-saveaccountbtn")).on("click", ()=>{
			let user = NeatoLib.Modules.get(["getCurrentUser"]).getCurrentUser();
			let token = this.UserInfoStore.getToken();
			if(this.settings.encrypted) token = this.encrypt(token, passwd);
			this.setSetting(i, "name", user.tag);
			this.setSetting(i, "token", token);
			this.setSetting(i, "id", user.id);
			this.setSetting(i, "avatar", user.avatarURL);
			element.querySelector(".accountswitcher-username").innerText = user.tag;
			element.querySelector(".accountswitcher-useravatar").setAttribute("src", user.avatarURL);
			element.querySelector(".accountswitcher-removeaccountbtn").removeAttribute("disabled");
			this.saveSettings();
		});
		$(element.querySelector(".accountswitcher-removeaccountbtn")).on("click", ()=>{
			this.setSetting(i, "token", "");
			this.setSetting(i, "avatar", "");
			this.setSetting(i, "id", "");
			this.setSetting(i, "name", "");
			element.querySelector(".accountswitcher-username").innerText = "";
			element.querySelector(".accountswitcher-useravatar").removeAttribute("src");
			element.querySelector(".accountswitcher-removeaccountbtn").setAttribute("disabled", true);
			this.saveSettings();
		});
		return element;
	}

	createToggleSwitch(label, value, callback, spacing = "20px") {
		var element = document.createElement("div");
		element.style.paddingTop = spacing;
		element.style.paddingBottom = spacing;
		element.innerHTML =
			`<div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStart-H-X2h- noWrap-3jynv6" style="flex: 1 1 auto;">
			<h3 class="titleDefault-a8-ZSr title-31JmR4 marginReset-236NPn weightMedium-2iZe9B size16-14cGz5 height24-3XzeJx flexChild-faoVW3" style="flex: 1 1 auto;">${label}</h3>
			<div id="accountswitcher-encrypttokensdiv" class="flexChild-faoVW3 switchEnabled-V2WDBB switch-3wwwcV ${value == true ? "valueChecked-m-4IJZ" : "valueUnchecked-2lU_20"} value-2hFrkk sizeDefault-2YlOZr size-3rFEHg themeDefault-24hCdX" style="flex: 0 0 auto;">
				<input id="accountswitcher-encrypttokenscheckbox" class="checkboxEnabled-CtinEn checkbox-2tyjJg" type="checkbox">
			</div>
		</div>`;
		element.querySelector("input").checked = value;
		element.querySelector("input").addEventListener("click", e => {
			var b = e.currentTarget.parentElement;
			if (b.classList.contains("valueChecked-m-4IJZ")) {
				b.classList.add("valueUnchecked-2lU_20");
				b.classList.remove("valueChecked-m-4IJZ");
			} else {
				b.classList.add("valueChecked-m-4IJZ");
				b.classList.remove("valueUnchecked-2lU_20");
			}
			callback(e);
		});
		return element;
	}

	createWarning(){
		let element = document.createElement("div");
		element.insertAdjacentHTML("beforeend", `
			<style>
				.accountswitcher-warning {
					color: #ff1919;
					padding-top: 20px;
				}
			</style>
			<div class="accountswitcher-warning">${this.local.settings.warning}</div>
		`);
		return element;
	}


	alertText(e, t, callbackOk, callbackCancel) {
		let backdrop = $(`<div class="backdrop-1wrmKB da-backdrop" style="opacity: 0.85; background-color: rgb(0, 0, 0); z-index: 1000; transform: translateZ(0px);"></div>`);
		let a =  $(`<div class="modal-3c3bKg da-modal" style="opacity: 1; transform: scale(1) translateZ(0px); z-index: 9999999">
						<div data-focus-guard="true" tabindex="0" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
						<div data-focus-guard="true" tabindex="1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
						<div data-focus-lock-disabled="false" class="inner-1ilYF7 da-inner">
							<div class="modal-yWgWj- da-modal container-14fypd da-container sizeSmall-1jtLQy">
								<div class="scrollerWrap-2lJEkd firefoxFixScrollFlex-cnI2ix da-scrollerWrap da-firefoxFixScrollFlex content-1EtbQh da-content scrollerThemed-2oenus da-scrollerThemed themeGhostHairline-DBD-2d">
									<div class="scroller-2FKFPG firefoxFixScrollFlex-cnI2ix da-scroller da-firefoxFixScrollFlex systemPad-3UxEGl da-systemPad inner-ZyuQk0 da-inner content-dfabe7 da-content">
										<h2 class="h2-2gWE-o title-3sZWYQ size16-14cGz5 height20-mO2eIN weightSemiBold-NJexzi da-h2 da-title da-size16 da-height20 da-weightSemiBold defaultColor-1_ajX0 da-defaultColor title-18-Ds0 marginBottom20-32qID7 marginTop8-1DLZ1n da-title da-marginBottom20 da-marginTop8">
											${e}
										</h2>
										<div class="body-Mj9Oxz da-body medium-zmzTW- size16-14cGz5 height20-mO2eIN primary-jw0I4K">
											${t}
										</div>
									</div>
								</div>
								<div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyBetween-2tTqYu alignStretch-DpGPf3 wrap-ZIn9Iy footer-3rDWdC da-footer" style="flex: 0 0 auto;">
									<button class="primaryButton-2BsGPp da-primaryButton button-38aScr da-button lookFilled-1Gx00P colorBrand-3pXr91 sizeXlarge-2yFAlZ grow-q77ONN da-grow">
										<div class="contents-18-Yxp da-contents">Okay</div>
									</button>
								</div>
							</div>
						</div>
						<div data-focus-guard="true" tabindex="0" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
					</div>`);
		a.find(".da-footer button").on("click", () => {
			if(typeof callbackOk === "function") callbackOk();
			//a.addClass("closing");
			//backdrop.addClass("closing");
			//window.setTimeout(() => {
				a.remove();
				backdrop.remove();
			//}, 300)
		});
		backdrop.on("click", () => {
			if(typeof callbackCancel === "function") callbackCancel();
			//a.addClass("closing");
			//backdrop.addClass("closing");
			//window.setTimeout(() => {
				a.remove();
				backdrop.remove();
			//}, 300)
		});
		backdrop.appendTo("#app-mount > div[data-no-focus-lock='true'] > div:not([class])");
		a.appendTo("#app-mount > div[data-no-focus-lock='true'] > div:not([class])");
		if(a.find("#accountswitcher-passwordinput")){
			a.find("#accountswitcher-passwordinput").on("keydown", e => {
				if(e.which == 13) a.find(".da-footer button").click();
				else if(e.which == 27) backdrop.click();
			});
			a.find("#accountswitcher-passwordinput").focus();
		}
		return a.find("div.da-modal")[0];
	}

	confirm(e, t, callbackConfirm, callbackCancel){
		let backdrop = $(`<div class="backdrop-1wrmKB da-backdrop" style="opacity: 0.85; background-color: rgb(0, 0, 0); z-index: 1000; transform: translateZ(0px);"></div>`);
		let a =  $(`<div class="modal-3c3bKg da-modal" style="opacity: 1; transform: scale(1) translateZ(0px); z-index: 9999999">
						<div data-focus-guard="true" tabindex="0" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
						<div data-focus-guard="true" tabindex="1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
						<div data-focus-lock-disabled="false" class="inner-1ilYF7 da-inner">
							<div class="modal-yWgWj- da-modal container-14fypd da-container sizeSmall-1jtLQy">
								<div class="scrollerWrap-2lJEkd firefoxFixScrollFlex-cnI2ix da-scrollerWrap da-firefoxFixScrollFlex content-1EtbQh da-content scrollerThemed-2oenus da-scrollerThemed themeGhostHairline-DBD-2d">
									<div class="scroller-2FKFPG firefoxFixScrollFlex-cnI2ix da-scroller da-firefoxFixScrollFlex systemPad-3UxEGl da-systemPad inner-ZyuQk0 da-inner content-dfabe7 da-content">
										<h2 class="h2-2gWE-o title-3sZWYQ size16-14cGz5 height20-mO2eIN weightSemiBold-NJexzi da-h2 da-title da-size16 da-height20 da-weightSemiBold defaultColor-1_ajX0 da-defaultColor title-18-Ds0 marginBottom20-32qID7 marginTop8-1DLZ1n da-title da-marginBottom20 da-marginTop8">
											${e}
										</h2>
										<div class="body-Mj9Oxz da-body medium-zmzTW- size16-14cGz5 height20-mO2eIN primary-jw0I4K">
											${t}
										</div>
									</div>
								</div>
								<div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyBetween-2tTqYu alignStretch-DpGPf3 wrap-ZIn9Iy footer-3rDWdC da-footer" style="flex: 0 0 auto;">
									<button class="primaryButton-2BsGPp da-primaryButton button-38aScr da-button lookFilled-1Gx00P colorBrand-3pXr91 sizeXlarge-2yFAlZ grow-q77ONN da-grow" style="margin-left:10px;">
										<div class="contents-18-Yxp da-contents">Cancel</div>
									</button>
									<button class="primaryButton-2BsGPp da-primaryButton button-38aScr da-button lookFilled-1Gx00P colorBrand-3pXr91 sizeXlarge-2yFAlZ grow-q77ONN da-grow">
										<div class="contents-18-Yxp da-contents">Okay</div>
									</button>
								</div>
							</div>
						</div>
						<div data-focus-guard="true" tabindex="0" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
					</div>`);
		$(a.find(".da-footer button")[1]).on("click", () => {
			if(typeof callbackConfirm === "function") callbackConfirm();
			a.addClass("closing");
			backdrop.addClass("closing");
			window.setTimeout(() => {
				a.remove();
				backdrop.remove();
			}, 300)
		});
		backdrop.on("click", () => {
			if(typeof callbackCancel === "function") callbackCancel();
			a.addClass("closing");
			backdrop.addClass("closing");
			window.setTimeout(() => {
				a.remove();
				backdrop.remove();
			}, 300)
		});
		$(a.find(".da-footer button")[0]).on("click", () => {
			if(typeof callbackCancel === "function") callbackCancel();
			a.addClass("closing");
			backdrop.addClass("closing");
			window.setTimeout(() => {
				a.remove();
				backdrop.remove();
			}, 300)
		});
		backdrop.appendTo("#app-mount > div[data-no-focus-lock='true'] > div:not([class])");
		a.appendTo("#app-mount > div[data-no-focus-lock='true'] > div:not([class])");
		if(a.find("#accountswitcher-passwordinput")){
			a.find("#accountswitcher-passwordinput").on("keydown", e => {
				if(e.which == 13) a.find(".da-footer button").click();
				else if(e.which == 27) backdrop.click();
			});
			a.find("#accountswitcher-passwordinput").focus();
		}
		return a.find("div.da-modal")[0];
	}

	loadLanguage(){
		this.lang = this.settings.language == "auto" ? document.documentElement.getAttribute("lang").split("-")[0] : this.settings.language;
	}

	formatString(input, ...args){
		for(let i = 0; i < args.length; i++){
			input = input.replace(`{${i}}`, args[i]);
		}
		return input;
	}
	hashString(input) {
		var hash = 0, i, chr;
		if (input.length === 0) return hash;
		for (i = 0; i < this.length; i++) {
			chr   = input.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0;
		}
		return hash;
	}





	encrypt(string, key){
		return string;
		
		let enc = CryptoJS.AES.encrypt(string, key).toString();
		try{
			let dec = this.decrypt(enc, key);
			if(string == dec) return enc;
			else return this.encrypt(string, key);
		}catch(ex){
			return this.encrypt(string, key);
		}
	}
	decrypt(string, key){
		return string;
		return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8);
	}
	
	
	getSetting(i, setting){
		let val = this.settings[setting + i];
		if(typeof val != "string") return val;
		if(val == "") return "";
		try {
			let os = require("os");
			let value = this.decrypt(val, os.platform() + os.type() + "nFagrAetGcHetaFEOvM".charAt(i).repeat(9*i%11));
			return value || val;
		}catch(ex){
			return val;
		}
	}
	setSetting(i, setting, val){
		if(val == "") return this.settings[setting + i] = "";
		if(typeof val != "string") return this.settings[setting + i] = val;
		let os = require("os");
		this.settings[setting + i] = this.encrypt(val, os.platform() + os.type() + "nFagrAetGcHetaFEOvM".charAt(i).repeat(9*i%11));
	}
}
