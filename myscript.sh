#!/bin/bash

# func
create() {
	# input
	echo -n "input create filename : "
	read filename
	if [ -z $filename ]; then
		echo "exit";
		exit;
	fi
	filename_=${filename,,}

	# action
	sed -e "s/Template_/${filename_^}/g" "./templates/template.action.js" > "./src/app/actions/${filename_}.action.js"
	# store
	sed -e "s/Template_/${filename_^}/g" -e "s/template_/${filename_}/g" "./templates/template.store.js" > "./src/app/stores/${filename_}.store.js"
	# components
	mkdir "./src/app/components/${filename_}"
	sed -e "s/template_/${filename_}/g" "./templates/template.html" > "./src/app/components/${filename_}/${filename_}.html"
	sed -e "s/Template_/${filename_^}/g" -e "s/template_/${filename_}/g" "./templates/template.directive.js" > "./src/app/components/${filename_}/${filename_}.directive.js"
	sed -e "s/Template_/${filename_^}/g" -e "s/template_/${filename_}/g" "./templates/template.controller.js" > "./src/app/components/${filename_}/${filename_}.controller.js"

	# echo
	echo "created"
}

delete() {
	echo -n "input delete filename : "
	read filename
	if [ -z $filename ]; then
		echo "exit"
		exit
	fi
	filename_=${filename,,}

	rm "./src/app/actions/${filename_}.action.js"
	rm "./src/app/stores/${filename_}.store.js"
	rm -fr "./src/app/components/${filename_}"

	echo "deleted"
}

# exe
echo "1 : create files....."
echo "2 : delete files....."
echo -n "input : "
read key
if [ $key = 1 ]; then
	create
elif [ $key = 2 ]; then
	delete "hoge"
else
	echo "error"
fi
