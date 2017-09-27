# Doggo & Pupper App

A website application that helps user to find dog-friendly places along with the weather. The app was built with Javascript, jQuery, HTML, CSS; and incorporates Google Places API as well as OpenWeatherMap API. 

## Running it locally (Please follow steps below)

### Prerequisites

Git initialized on the project directory by running :

```
git init
```

Create your Firebase project from the Firebase console at https://console.firebase.google.com/


### Cloning and Deployment

On your local directory, clone the Doggo & Pupper repository by running :

```
git clone https://github.com/thegirlfromipanema/dog_friendly_places_finder
```

then, initialize the Firebase by running :

```
firebase init
```

Firebase will prompt some questions :
```
? What Firebase do you want to use? <choose your Firebase project>
```

```
? What directory should be the public root?
```

type :
```
public
```

It will then prompt back the confirmation :
```
Firebase initialized, configuration written to firebase.json  
```

Do not overwrite your public.html file (type 'N')

Finally run :

```
firebase deploy
```

and followed by :

```
firebase open
```

If you want to shoot the project up to your local server, run :

```
firebase serve

```

### Technical Rationale

- I used Javascript and jQuery to simplify the development without sacrificing the quality of features and functionalities. jQuery library enables the app (with much less code) to do DOM/HTML/CSS manipulation as well as effects or animations integration on some elements. 

- For relevancy and brevity, I only retrieve some information from the APIs. For Google Places, the app pulls up the place's name, address, rating and opening hours status (open / closed). As for the OpenWeatherMap, the app retrieves only the temperature in the searched city and the weather description (e.g. the sky is clear, of it there are few clouds or broken clouds, etc). For better and more attractive UX, each weather description will also have its animated visual representation. 


## Host

Visit the deployed project here :

https://doggopupper-2608a.firebaseapp.com/

## Features

- Search places based on three categories (a cafe, dog-park or a vet) or just about any dog-friendly places that might be available in the city you want to take your dog to

- Search all dog-friendly places in any city. Any valid address will do. 

- Automatically displaying the weather in the searched area. 

## Built With

* [jQuery](https://jquery.com/) - Used to simplify client side web development
* [Google Places API](https://developers.google.com/maps/documentation/javascript/places) - Used to pull up data of places based on certain keywords (a cafe, dog park and a vet).
* [OpenWeatherMap API](https://openweathermap.org/current) - Used to pull up weather data of the searched cities
* [Firebase](https://firebase.google.com/) - Used for deployment

## Versioning

1.0.0

## Designer & Developer

[Maya Novarini](https://github.com/thegirlfromipanema?tab=repositories)

Visit my [portfolio](http://mayanovarini.com)
