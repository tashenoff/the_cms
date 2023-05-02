<?php namespace alex\Components;

use Cms\Classes\ComponentBase;

class Banner extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Banner',
            'description' => 'Displays a dynamic banner on the page'
        ];
    }

    public function defineProperties()
    {
        return [
            'title' => [
                'title' => 'Banner Title',
                'type' => 'string',
                'default' => 'New Banner'
            ],
            'description' => [
                'title' => 'Banner Description',
                'type' => 'string',
                'default' => 'This is a new banner'
            ],
            'image' => [
                'title' => 'Banner Image',
                'type' => 'string',
                'default' => ''
            ],
            'link' => [
                'title' => 'Banner Link',
                'type' => 'string',
                'default' => ''
            ]
        ];
    }

    public function onRun()
    {
        $this->page['bannerTitle'] = $this->property('title');
        $this->page['bannerDescription'] = $this->property('description');
        $this->page['bannerImage'] = $this->property('image');
        $this->page['bannerLink'] = $this->property('link');
    }
}
