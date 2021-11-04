# Cvičení 2 - Kurzovní lístek

1. Naklonuj si [repozitář](https://github.com/Czechitas-podklady-WEB/currencies) obsahující React stránku s jednoduchým formulářem pro kurzy měn. Prohlédni si připravený kód.

2. Do komponenty Rate přidej prop nazvanou `from`, která bude obsahovat kód měny, ze které chceme konvertovat na české koruny. Zařiď, aby komponenta zobrazila kód měny, který uživatel vybere z nabídky (obousměrný data binding).

3. Chceme-li získat kurz amerického dolaru, můžeme využít následující API.
	```
	https://api.frankfurter.app/latest?from=USD&to=CZK
	```

	Prohlédni si data, která toto API vrací. Zkus do URL jako parametr `from` zadat nějakou jinou měnu, například CHF a podívej se, jak se data změní.

4. Upravte komponentu Rate tak, aby si z API stáhla správny kurz pro měnu, kterou dostane v prop `from`. Výslední kurz zobraz v elementu s CSS třidou `rate__value`.

5. Zařiď, aby se správná data stáhla kdykoliv, když se změní hodnota uvniř prop `from`.
