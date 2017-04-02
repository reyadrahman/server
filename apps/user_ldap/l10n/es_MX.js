OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Se presentó una falla al borrar los mapeos.",
    "Failed to delete the server configuration" : "Se presentó una falla al borrar la configuración del servidor",
    "The configuration is invalid: anonymous bind is not allowed." : "La configuración es inválida: No se permite hacer una vinculación anónima . ",
    "The configuration is valid and the connection could be established!" : "¡La configuración es válida y la conexión se pudo establecer!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "La configuración es válida, pero falló la Vinculación. Favor de verificar la configuración del servidor y las credenciales.",
    "The configuration is invalid. Please have a look at the logs for further details." : "La configuración es inválida. Favor de consultar las bitácoras para más detalles.",
    "No action specified" : "No se ha especificado una acción",
    "No configuration specified" : "No se ha especificado una configuración",
    "No data specified" : "No se han especificado datos",
    " Could not set configuration %s" : "No fue posible establecer la configuración %s",
    "Action does not exist" : "La acción no existe",
    "The Base DN appears to be wrong" : "El DN Base parece estar incorrecto",
    "Testing configuration…" : "Probando configuracion... ",
    "Configuration incorrect" : "Configuración Incorrecta",
    "Configuration incomplete" : "Configuración incompleta",
    "Configuration OK" : "Configuración correcta",
    "Select groups" : "Seleccionar grupos",
    "Select object classes" : "Seleccionar las clases de objeto",
    "Please check the credentials, they seem to be wrong." : "Favor de verificar sus credenciales, al parecer están equivocadas.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "No fue posuble auto detectar el DN base, favor de verificar las credenciales, servidor y puerto.",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Se presentó un error. Favor de verificar la Base DN, así como los ajustes de la conexión y las credenciales.",
    "Do you really want to delete the current Server Configuration?" : "¿Realmente desea eliminar la configuración actual del servidor?",
    "Confirm Deletion" : "Confirmar el borrado",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "La vinculación anónima no está permitida. Favor de proporcionar un Usuario DN y una Contaseña.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Error de Operaciones LDAP. Las vinculaciones anónimas pueden no estar permitidas. ",
    "Mode switch" : "Cambio de modo",
    "Select attributes" : "Seleccionar atributos",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "No se encontró el usuario. Favor de verficiar los atributos de inicio de sesión y su nombre de usuario. Filtrado efectivo (para copiar y pegar a la validación de línea de comandos): </br>",
    "User found and settings verified." : "Usuario encontrado y ajustes verificados. ",
    "An unspecified error occurred. Please check the settings and the log." : "Se presentó un error no especificado. Favor de verificar los ajustes y la bitácroa. ",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "El filtro de la búsqueda es inválido, posiblemente debido a temas de sintaxis como un número diferente de corchetes abiertos y cerrados. Favor de verificar. ",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Se presentó una falla con la conexión al servidor LDAP / AD, favor de verificar el servidor, puerto y credenciales. ",
    "Please provide a login name to test against" : "Favor de proporcionar un nombre de usuario contra el cual probar",
    "Password change rejected. Hint: " : "Cambio de contraseña rechazado. Pista: ",
    "_%s group found_::_%s groups found_" : ["Grupo %s encontrado","%s grupos encontrados"],
    "_%s user found_::_%s users found_" : ["Usuario %s encontrado","%s usuarios encontrados"],
    "Could not find the desired feature" : "No fue posible encontrar la función deseada.",
    "Invalid Host" : "Servidor inválido",
    "Test Configuration" : "Probar configuración",
    "Help" : "Ayuda",
    "Only these object classes:" : "Sólo estas clases de objetos:",
    "Only from these groups:" : "Sólo desde estos grupos:",
    "Search groups" : "Buscar grupos",
    "Available groups" : "Grupos disponibles",
    "Selected groups" : "Grupos seleccionados",
    "Edit LDAP Query" : "Editar consulta a LDAP",
    "LDAP Filter:" : "Filtro de LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "El filtro especifica cuales grupos LDAP tendrán acceso a la instancia %s.",
    "LDAP / AD Username:" : "Nombre de usuario LDAP / AD",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "Permite iniciar sesión contra el nombre de usuario LDAP / AD, que es el uid o el samaccountname y será detectado. ",
    "LDAP / AD Email Address:" : "Dirección de correo electrónico LDAP / AD",
    "Allows login against an email attribute. Mail and mailPrimaryAddress will be allowed." : "Permite iniciar sesión contra el atributo correo electrónico. Mail y mailPrimaryAddress serán permitidos.",
    "Other Attributes:" : "Otros atributos:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Define el filtro a aplicar al intentar ingresar. %% uid remplaza al nombre de usuario al intentar ingresar. Por ejemplo: \"uid=%%uid\"",
    "Test Loginname" : "Probar nombre de usuario",
    "Verify settings" : "Verificar ajustes",
    "1. Server" : "1. Servidor",
    "Delete the current configuration" : "Borrar la configuración actual",
    "Host" : "Servidor",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Puede omitir el protocolo, excepto si requiere SSL. En ese caso, empiece con ldaps://",
    "Port" : "Puerto",
    "Detect Port" : "Detectar Puerto",
    "User DN" : "DN del usuario",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "El DN del usuario cliente con el que se hará la asociación, p.ej. uid=agente,dc=ejemplo,dc=com. Para acceso anónimo, deje DN y contraseña vacíos.",
    "Password" : "Contraseña",
    "For anonymous access, leave DN and Password empty." : "Para acceso anónimo, deje la contraseña y DN vacíos.",
    "One Base DN per line" : "Un DN Base por línea",
    "You can specify Base DN for users and groups in the Advanced tab" : "Puede especificar el DN base para usuarios y grupos en la pestaña Avanzado",
    "Test Base DN" : "Probar la base DN",
    "The filter specifies which LDAP users shall have access to the %s instance." : "El filtro especifica cuáles usuarios LDAP tendrán acceso a la instancia %s.",
    "Verify settings and count users" : "Verificar ajustes y contar ususarios",
    "Saving" : "Guardando",
    "Back" : "Atrás",
    "Continue" : "Continuar",
    "LDAP" : "LDAP",
    "Server" : "Servidor",
    "Users" : "Usuarios",
    "Login Attributes" : "Atriburos de Inicio de Sesión",
    "Groups" : "Grupos",
    "Expert" : "Experto",
    "Advanced" : "Avanzado",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Advertencia:</b> Las aplicaciones user_ldap y user_webdavauth son incompatibles. Usted puede expermientar comportamientos inesperados. Favor de solicitar a su administrador del sistema deshabilitar alguno de ellos.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Advertencia:</b> El módulo LDAP de PHP no está instalado, el sistema no funcionará. Favor de solicitar su instalación a su administrador del sistema.",
    "Connection Settings" : "Ajustes de la conexión",
    "Configuration Active" : "Configuracion Activa",
    "When unchecked, this configuration will be skipped." : "Cuando deseleccione, esta configuracion sera omitida.",
    "Backup (Replica) Host" : "Servidor de copia de seguridad (Replica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Favor de proporcionar un servidor de copia de seguridad opcional. Debe ser una réplica del servidor LDAP / AD principal.",
    "Backup (Replica) Port" : "Puerto para copias de seguridad (Réplica)",
    "Disable Main Server" : "Deshabilitar servidor principal",
    "Only connect to the replica server." : "Sólo contectarse al servidor de réplica.",
    "Turn off SSL certificate validation." : "Apagar la validación por certificado SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "¡No se recomienda, úselo únicamente para pruebas! Si la conexión sólo funciona con esta opción, importe el certificado SSL del servidor LDAP a su servidor %s.",
    "Cache Time-To-Live" : "Cache TTL",
    "in seconds. A change empties the cache." : "en segundos. Un cambio vacía la caché.",
    "Directory Settings" : "Ajustes del directorio",
    "User Display Name Field" : "Campo de nombre del usuario a desplegar",
    "The LDAP attribute to use to generate the user's display name." : "El atributo LDAP a usar para generar el nombre del usuario a desplegar.",
    "Base User Tree" : "Árbol de Usuario Base",
    "One User Base DN per line" : "Un DN Base de Usuario por línea",
    "User Search Attributes" : "Atributos de búsqueda de usuario",
    "Optional; one attribute per line" : "Opcional; un atributo por linea",
    "Group Display Name Field" : "Campo de nombre de grupo a mostrar",
    "The LDAP attribute to use to generate the groups's display name." : "El campo LDAP a usar para generar el nombre para mostrar del grupo.",
    "Base Group Tree" : "Árbol base de grupo",
    "One Group Base DN per line" : "Un DN Base de Grupo por línea",
    "Group Search Attributes" : "Atributos de Búsqueda de Grupo",
    "Group-Member association" : "Asociación Grupo-Miembro",
    "Nested Groups" : "Grupos Anidados",
    "Enable LDAP password changes per user" : "Habilitar cambio de contraseñas en LDAP por el usuario",
    "(New password is sent as plain text to LDAP)" : "(La nueva contraseña se envía como texto plano a LDAP)",
    "Special Attributes" : "Atributos Especiales",
    "Quota Field" : "Campo de cuota",
    "Quota Default" : "Cuota predeterminada",
    "Email Field" : "Campo de correo electrónico",
    "User Home Folder Naming Rule" : "Regla de Nomenclatura para la Carpeta Inicio del Usuario",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Dejar vacío para el nombre de usuario (predeterminado). En otro caso, especifique un atributo LDAP/AD.",
    "Internal Username" : "Nombre de usuario interno",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Por defecto, el nombre de usuario interno se creará con base en el atributo UUID. Esto asegura que el nombre de usuario sea único y que los caracteres no tengan que ser convertidos. El nombre de usuario intenro tiene la restricción de que sólo los siguienes caracteres están permitidos: [ a-zA-Z0-9_.@- ]. El resto de los caracteres son reemplazados con su correspondencia ASCII o simplemente se omiten. En caso de colisiones, se agregará/ incrementará un numero. El nombre de usuario interno se usa para identificar a un usuario internamente. Adicionalmente es el nombre predeterminado para la carpeta de inicio. También es parte de las URLs remotas, por ejemplo, para todos los servicios *DAV. Con este ajuste se puede anular el comportamiento predeterminado. Mantengalo vacío para mantener el comportamiento predeterminado. Los cambios surtiran efecto solo en los usuarios mapeados (agregados) nuevos a LDAP. ",
    "Internal Username Attribute:" : "Atributo de nombre de usuario Interno:",
    "Override UUID detection" : "Sobrescribir la detección UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Por defecto, el atributo UUID se detecta automáticamente. Este atributo se usa para identificar, sin ninguna duda, a usuarios y grupos LDAP. Adicionalmente, el nombre de usuario interno se creará con base en el UUID, si no ha sido especificado otro comportamiento en la parte de arriba. Puede anular el ajuste y proporcionar el atributo que desee. Debe asegurarse de que el atributo que desee sea accesible por los usuarios y grupos y que sea único. Mantengalo vacío para el comportamiento predeterminado . Los cambios surtirán efecto solo en los usuarios y grupos mapeados (agregados) nuevos a LDAP.",
    "UUID Attribute for Users:" : "Atributo UUID para Usuarios:",
    "UUID Attribute for Groups:" : "Atributo UUID para Grupos:",
    "Username-LDAP User Mapping" : "Asignación del Nombre de usuario de un usuario LDAP",
    "Clear Username-LDAP User Mapping" : "Borrar la asignación de los Nombres de usuario de los usuarios LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Borrar la asignación de los Nombres de grupo de los grupos de LDAP",
    "in bytes" : "en bytes"
},
"nplurals=2; plural=(n != 1);");
