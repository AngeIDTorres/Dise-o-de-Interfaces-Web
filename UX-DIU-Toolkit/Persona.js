/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Laura Martínez",
				Photo: "woman.png",
				Quote: "Los datos son la voz del usuario.",
				Age: 29,
				Occupation: "Product Manager (Nivel Usuario)",
				Family: "Soltera",
				Location: "Barcelona",
				Character: "Curiosa, comunicativa y orientada a resultados.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Entender cómo los usuarios interactúan con la app", "Tomar decisiones de producto basadas en datos reales"],
				Frustrations: ["Depender de los desarrolladores para obtener informes de uso", "Dashboards demasiado técnicos y difíciles de interpretar"],
				Bio: "Laura es responsable del roadmap de una aplicación SaaS. Como usuaria final de la monitorización, no tiene un perfil puramente técnico, pero se maneja bien con herramientas digitales. Le gusta tener a la vista métricas clave de negocio (KPIs) y uso de la aplicación. Busca visualizar los datos de forma clara y atractiva para presentarlos en reuniones estratégicas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Necesita preparar un informe de impacto del último lanzamiento y quiere explorar los dashboards como usuaria sin pedir queries complejas.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Carlos Ruiz",
				Photo: "man.png",
				Quote: "Si no está monitorizado, no existe.",
				Age: 34,
				Occupation: "Administrador de Sistemas (Nivel SysAdmin)",
				Family: "Casado, un hijo pequeño",
				Location: "Madrid",
				Character: "Analítico, detallista y proactivo.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Anticiparse a las caídas del sistema", "Unificar la visibilidad de todas las métricas en un solo lugar"],
				Frustrations: ["Consultar múltiples herramientas durante un incidente", "Falsos positivos en las alertas de madrugada"],
				Bio: "Carlos lleva más de 8 años en el área de sistemas. Lidera el equipo de operaciones en una startup tecnológica. Su día a día consiste en administrar los sistemas y asegurar la disponibilidad de la plataforma. Necesita herramientas potentes a nivel de administrador que le permitan crear dashboards complejos, gestionar permisos de usuarios y cruzar datos para detectar anomalías al instante.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos:   "Quiere centralizar logs y métricas de sus servidores configurando alertas avanzadas para reducir el tiempo de resolución de incidencias (MTTR)." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])