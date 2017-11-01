import React from 'react';

import FullTextSearch from './FullTextSearch';
import TagFilter from './TagFilter';

import './Documents.css';

class Documents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: getDocuments(),
            searchText: "",
            filteredDocuments: getDocuments(),
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.filterDocuments = this.filterDocuments.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.filterDocByTag = this.filterDocByTag.bind(this);
    }

    handleSearch(searchText) {
        console.log("Search: " + searchText);
    }

    handleFilter(tags) {
        this.setState({ filteredTags: tags }, () => { this.filterDocuments() });
    }

    filterDocuments() {
        let documents = this.state.documents.filter(this.filterDocByTag);

        this.setState({ filteredDocuments: documents });
    }

    filterDocByTag(doc) {

        // Do not filter for empty values
        if(this.state.filteredTags === undefined || this.state.filteredTags.length === 0) {
            return true;
        }

        const tags = this.state.filteredTags;
        for (var i = 0; i < doc.tags.length; i++) {
            var element = doc.tags[i];
            if(tags.indexOf(element) >= 0) {
                return true;
            }
        }

        return false;
    }

    render() {
        const documents = this.state.filteredDocuments.map((document) => {
            return (
                <div className="documentOverview" key={document.id}>
                    <table>
                        <thead>
                            <tr>
                                <th>{document.name}</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Added:</td>
                                <td>{document.added}</td>
                                <td>by:</td>
                                <td>{document.from}</td>
                            </tr>
                            <tr>
                                <td>Tags:</td>
                                <td colSpan="3">{document.tags.join(", ")}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td colSpan="3">{document.description}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <button>Open</button>
                </div>
            );
        });

        return (
            <div>
                <FullTextSearch
                    searchText={this.state.searchText}
                    onClick={this.handleSearch}
                    onChange={this.handleSearch} />
                <TagFilter
                    onClick={this.handleFilter}
                    onChange={this.handleFilter}
                    tags={getFilterTags(this.state.documents)} />
                {documents}
            </div>
        );
    }
}
export default Documents;



function getFilterTags(docs) {
    let hash = [];
    docs.forEach((doc) => {
        doc.tags.forEach((tag) => {
            if(hash.indexOf(tag) < 0) {
                hash.push(tag);
            }
        });
    });

    return hash.sort().map((tag) => {
        return { label: tag, value: tag };
    });
}

function getDocuments() {
    return [
        {
            "id": 1,
            "name": "Document 1",
            "description": "This is a assurance document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "assurance",
                "alexander",
                "running",
            ]
        },
        {
            "id": 2,
            "name": "Document 2",
            "description": "This is a bank document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "alexander",
                "bank",
            ]
        },
        {
            "id": 3,
            "name": "Document 3",
            "description": "This is a car assurance document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "assurance",
                "alexander",
                "car",
            ]
        },
        {
            "id": 4,
            "name": "Document 4",
            "description": "This is a car assurance document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "assurance",
                "alexander",
                "car",
            ]
        }
        ,
        {
            "id": 5,
            "name": "Document 5",
            "description": "This is a car assurance document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "assurance",
                "alexander",
                "car",
            ]
        }
        ,
        {
            "id": 6,
            "name": "Document 6",
            "description": "This is a car assurance document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "assurance",
                "alexander",
                "car",
            ]
        }
        ,
        {
            "id": 7,
            "name": "Document 7",
            "description": "This is a car assurance document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "assurance",
                "alexander",
                "car",
            ]
        }
        ,
        {
            "id": 8,
            "name": "Document 8",
            "description": "This is a car assurance document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "assurance",
                "alexander",
                "car",
            ]
        }
        ,
        {
            "id": 9,
            "name": "Document 9",
            "description": "This is a car assurance document.",
            "added": "2016-03-17",
            "from": "Alexander",
            "tags": [
                "assurance",
                "alexander",
                "car",
            ]
        }
    ];
}