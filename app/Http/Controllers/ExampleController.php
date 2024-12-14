<?php
/**
 * LARABIZ CMS - Full SPA Laravel CMS
 *
 * @package    larabizcom/larabiz
 * @author     The Anh Dang
 * @link       https://larabiz.com
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LarabizCMS\Core\Facades\Breadcrumb;
use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\PageBuilder\Elements\Card;
use LarabizCMS\Core\PageBuilder\Elements\DataTable;
use LarabizCMS\Core\PageBuilder\Elements\Form;
use LarabizCMS\Core\PageBuilder\Elements\Forms\Checkbox;
use LarabizCMS\Core\PageBuilder\Elements\Forms\DatePicker;
use LarabizCMS\Core\PageBuilder\Elements\Forms\DateTimePicker;
use LarabizCMS\Core\PageBuilder\Elements\Forms\Editor;
use LarabizCMS\Core\PageBuilder\Elements\Forms\File;
use LarabizCMS\Core\PageBuilder\Elements\Forms\Image;
use LarabizCMS\Core\PageBuilder\Elements\Forms\Images;
use LarabizCMS\Core\PageBuilder\Elements\Forms\Repeater;
use LarabizCMS\Core\PageBuilder\Elements\Forms\Select;
use LarabizCMS\Core\PageBuilder\Elements\Forms\Text as TextField;
use LarabizCMS\Core\PageBuilder\Elements\Forms\Textarea;
use LarabizCMS\Core\PageBuilder\Elements\Forms\UploadUrl;
use LarabizCMS\Core\PageBuilder\Elements\Grids\Col12;
use LarabizCMS\Core\PageBuilder\Elements\Grids\Col6;
use LarabizCMS\Core\PageBuilder\Elements\Grids\Container;
use LarabizCMS\Core\PageBuilder\Elements\Menu;
use LarabizCMS\Core\PageBuilder\Elements\Table;
use LarabizCMS\Core\PageBuilder\Page;

class ExampleController extends Controller
{
    public function element(): Page
    {
        Breadcrumb::add('Example');
        Breadcrumb::add('Elements');

        $page = Page::make();

        $page->fill(['title' => 'Form', 'description' => 'Form']);

        $session = Col12::make();
        $menuCard = Card::make(['title' => 'Menu']);
        $menuCard->add(
            Menu::make(['items' => [
                ['title' => 'Link 1', 'url' => 'https://larabiz.com', 'icon' => 'home'],
                ['title' => 'Link 2', 'url' => 'https://larabiz.com', 'icon' => 'link'],
                ['title' => 'Link 3', 'url' => 'https://larabiz.com', 'icon' => 'link', 'subtitle' => 'Sub title'],
            ]]),
        );

        $table = Table::make()->columns(['name' => 'Name', 'email' => 'Email', 'phone' => 'Phone']);
        $table->rows([
            ['id' => 1, 'name' => 'John', 'email' => 'a0sKk@example.com', 'phone' => '1234567890'],
            ['id' => 2, 'name' => 'Mary', 'email' => 'a0sKk@example.com', 'phone' => '1234567890'],
            ['id' => 3, 'name' => 'Mark', 'email' => 'a0sKk@example.com', 'phone' => '1234567890'],
            ['id' => 4, 'name' => 'Adam', 'email' => 'a0sKk@example.com', 'phone' => '1234567890'],
        ]);

        $tableCard = Card::make()->title('Table')->add($table);

        // Datatable data from url
        $dataTable = DataTable::make()->withColumns(['Name', 'Email', 'Phone']);
        $dataTable->dataUrl('/users');
        $cardDataTableUrl = Card::make()->title('Datatable')->add($dataTable);

        $session->add(
            Container::make()->mb(3)->add(
                Col6::make()->add($menuCard),
                Col6::make()->add($tableCard),
            ),
            Container::make()->mt(3)->add(
                Col12::make()->add($cardDataTableUrl),
            ),
        );

        $page->add(Container::make()->add($session));

        return $page;
    }

    public function form(): Page
    {
        Breadcrumb::add('Example');
        Breadcrumb::add('Form');

        $input = TextField::make(['name' => 'textfield', 'label' => 'Textfield'])
            ->placeholder('Placeholder text')
            ->rules(['required'])
            ->value('This is test textfield');

        $textarea = Textarea::make(['name' => 'textarea', 'label' => 'Textarea'])
            ->placeholder('Placeholder text')
            ->rows(5)
            ->rules(['required'])
            ->value('This is test textarea');

        $selectAutocomplete = Select::make(['name' => 'select_autocomplete', 'label' => 'Selector Autocomplete'])
            ->autocomplete()
            ->options(['option1' => 'Option 1', 'option2' => 'Option 2', 'option3' => 'Option 3'])
            ->value('option2')
            ->rules(['required']);

        $form = Form::make()->action(action([static::class, 'handle']));
        $card = Card::make()->title('Form');
        $card->add(
            Container::make()->add(
                $input,
                TextField::make(['name' => 'textsecurity', 'label' => 'Text Security'])
                    ->value(Str::mask('This is test textfield', '*', 5))
                    ->security(),
                $textarea,
                Select::make(['name' => 'select', 'label' => 'Selector'])
                    ->options(['' => '-- Select --', 'option1' => 'Option 1', 'option2' => 'Option 2', 'option3' => 'Option 3'])
                    ->value('option1')
                    ->rules(['required']),
                Checkbox::make(['name' => 'checkbox', 'label' => 'Checkbox']),
                $selectAutocomplete,
                Select::make(['name' => 'select_autocomplete_url', 'label' => 'Selector Autocomplete By Url'])
                    ->autocomplete()
                    ->dataUrl('https://jsonplaceholder.typicode.com/users', 'name')
                    ->selected(2, 'Ervin Howell')
                    ->rules(['required']),
                Select::make(['name' => 'select_autocomplete_multiple', 'label' => 'Selector Autocomplete By Url'])
                    ->autocomplete()
                    ->dataUrl('https://jsonplaceholder.typicode.com/users', 'name')
                    ->selected(2, 'Ervin Howell')
                    ->multiple()
                    ->rules(['required']),
                Select::make(['name' => 'select_autocomplete_multiple_with_pagination', 'label' => 'Selector Autocomplete By Url with pagination'])
                    ->autocomplete()
                    ->dataUrl('/media?limit=20', 'name')
                    ->multiple()
                    ->selected(1, 'create-website.wmv')
                    ->rules(['required']),
                Editor::make(['name' => 'editor', 'label' => 'Editor'])->value('<b>Hello</b>'),
                Images::make(['name' => 'images', 'label' => 'Images'])->accept(['image/jpg', 'image/jpeg', 'image/png'])
                    ->value([]),
                Repeater::make(['name' => 'repeater', 'label' => 'Repeater'])
                    ->items(
                        [
                            TextField::make(['name' => 'repeater', 'label' => 'Repeater Item'])->required(),
                            TextField::make(['name' => 'repeater2', 'label' => 'Repeater Item 2']),
                            Images::make(['name' => 'images', 'label' => 'Repeater Images'])
                                ->accept(['image/jpg', 'image/jpeg', 'image/png'])
                                ->value([]),
                        ]
                    )
                    ->values([['repeater' => 'repeater', 'repeater2' => 'repeater2']]),
            )
        );
        $form->add(
            Col12::make()->attributes(['xs' => 12, 'md' => 8, 'item' => true])->add($card),
            Col12::make()->attributes(['xs' => 12, 'md' => 4, 'item' => true])->add(
                Card::make(['title' => 'Form Sidebar'])->add(
                    Container::make()->add(
                        Image::make(['name' => 'image', 'label' => 'Image']),
                        File::make(['name' => 'file', 'label' => 'File']),
                        File::make(['name' => 'files', 'label' => 'Files'])->multiple(),
                        DatePicker::make(['name' => 'date_picker', 'label' => 'Date picker'])
                            ->value(date('Y-m-d'))
                            ->rules(['required']),
                        DateTimePicker::make(['name' => 'date_time_picker', 'label' => 'Date time picker'])
                            ->rules(['required'])
                            ->value(date('Y-m-d H:i:s')),
                        UploadUrl::make(['name' => 'upload_url', 'label' => 'Upload Url'])
                            ->accept(['image/jpg', 'image/jpeg', 'image/png']),
                    )
                )
            )
        );

        $session1 = Col12::make()->add($form);

        return Page::make(['title' => 'Example', 'description' => 'Example'])->add(Container::make()->add($session1));
    }

    public function handle(Request $request)
    {
        dd($request->all());
    }
}
