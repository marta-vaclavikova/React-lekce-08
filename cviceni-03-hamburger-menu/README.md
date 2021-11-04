# Cvičení 3 - Hamburger menu

1. Naklonuj si [repozitář](https://github.com/podlomar/daweb-react-hamburger)  a proveď v něm `npm install`. Kód obsahuje React stránku s jednoduchým hamburger menu. Prohlédni si připravený kód.

2. Vytvoř stav `menuOpened`, který bude obsahovat hodnotu `true` nebo `false` podle toho, zda má být menu otevřeno nebo zavřeno. Stav ovládejte kliknutím na tlačítko `.menu__btn`.

3. Podle hodnoty ve stavu `menuOpened` správně sestav třídu pro element `.menu`. K zavření menu slouží CSS třída `menu--closed`. (Tj. když má být menu zavřené, na menu musí být tato třída přidaná. Když je menu otevřené, tak na elementu tato třída nebude.)

4. Chceme, aby se hamburger menu zavřelo i po kliknutí na libovolný odkaz v menu. Uvnitř komponenty App tedy vytvoř callback funkci `handleSelectItem`, která změní hodnotu stavu `menuOpened` na `false`.

5. Chceme, aby komponenta `MenuItem` přijímala prop s názvem `onSelect`. V t0to prop se bude očekávat callback funkce, která se zavolá, když uživatel vybere danou položku. Předej tedy funkci `handleSelectItem` všem komponentám `MenuItem` jako prop s názvem `onSelect`.

6. Uvnitř komponenty `MenuItem` zajisti, aby se předaný callback zavolal při kliknutí na položku odkazu.


## Změna názvu stránky

Budeme chtít, aby se při kliknutí na položku menu zobrazil v aplikaci správný název stránky.

7. Přidej do komponenty `App` stav s názvem `pageTitle`, který bude představovat název aktuální stránky. Jeho výchozí hodnotu nastav na text `Domů` a použijte tento stav uvnitř elementu `<h1>`.

8. Zařiď, aby komponenta `MenuItem` při volání funkce `onSelect` zavolala tuto funkci s parametrem, který udává název stránky, který se má zobrazit. Tím vlastně komponenta `MenuItem` předá název stránky rodičovské komponentě `App`.

9. Do funkce `handleSelectItem` přidej parametr page a nastav stav `pageTitle` na hodnotu z tohoto parametru.

Aplikace by měla fungovat tak, že kliknutím na tlačítko otevřeš hamburger menu. Když klikneš na položku, menu se zavře a na stránce se zobrazí správný nadpis.